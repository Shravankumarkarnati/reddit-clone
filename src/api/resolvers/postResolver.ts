import { Vote } from "./../../database/entity/vote";
import { User } from "./../../database/entity/user";
import { MyContext } from "./../../utils/types/MyContext";
import { isLoggedIn } from "./../../utils/middleware/isLoggedIn";
import { Post } from "./../../database/entity/post";
import {
  Arg,
  Ctx,
  Field,
  FieldResolver,
  InputType,
  Int,
  Mutation,
  ObjectType,
  Query,
  Resolver,
  Root,
  UseMiddleware,
} from "type-graphql";

@InputType()
export class PostInputType {
  @Field()
  title!: string;
  @Field()
  post!: string;
}

@ObjectType()
class PaginatedPosts {
  @Field(() => [Post])
  posts: Post[];
  @Field(() => Boolean)
  hasMore: Boolean;
}

@ObjectType()
class voteResult {
  @Field(() => Boolean)
  success!: Boolean;
  @Field(() => Number)
  currentPoints?: number;
  @Field(() => Number)
  currentStatus?: number;
}

@Resolver(Post)
export class PostResolver {
  @FieldResolver(() => String)
  postSnippet(@Root() root: Post) {
    return root.post.length > 50 ? `${root.post.slice(0, 50)}...` : root.post;
  }

  @FieldResolver(() => String)
  async postOwnerUsername(
    @Root() root: Post,
    @Ctx() { connection }: MyContext
  ) {
    const ownerId = root.postOwnerId;
    const username = await connection
      .getRepository(User)
      .findOne(ownerId as number);
    return username?.username;
  }

  @FieldResolver(() => Number)
  async voteStatus(@Root() root: Post, @Ctx() { connection, req }: MyContext) {
    const postId = root.id;
    const userId = parseInt(req.session!.userId);
    const voteRepo = connection.getRepository(Vote);
    const voteStatus = await voteRepo.findOne({ userId, postId });
    const ret = voteStatus ? voteStatus.value : 0;
    return ret;
  }

  @Query(() => PaginatedPosts)
  async posts(
    @Arg("limit", () => Number) limit: number,
    @Ctx() { connection }: MyContext,
    @Arg("cursor", { nullable: true }) cursor?: string
  ): Promise<PaginatedPosts> {
    const extra = Math.min(20, limit) + 1;
    const query = connection
      .createQueryBuilder()
      .select("post")
      .from(Post, "post")
      .orderBy("created_at", "DESC")
      .take(extra);
    if (cursor) {
      query.where("post.created_at <= :cursor", { cursor: cursor });
    }
    const allPosts = await query.getMany();
    return {
      hasMore: allPosts.length === extra,
      posts: allPosts.slice(0, extra - 1),
    };
  }

  @Query(() => Post, { nullable: true })
  async post(
    @Ctx() { connection }: MyContext,
    @Arg("id", () => Int) id: number
  ): Promise<Post | null> {
    const postsRepo = connection.getRepository(Post);
    const post = await postsRepo.findOne(id);
    return post ? post : null;
  }

  @Mutation(() => Post)
  @UseMiddleware(isLoggedIn)
  async createPost(
    @Ctx() { connection, req }: MyContext,
    @Arg("postInput", () => PostInputType) postInput: PostInputType
  ): Promise<Post> {
    const newPost = new Post();
    newPost.title = postInput.title;
    newPost.post = postInput.post;
    newPost.postOwnerId = parseInt(req.session!.userId);
    const postRepo = connection.getRepository(Post);
    return await postRepo.save(newPost);
  }

  @Mutation(() => Post, { nullable: true })
  async updatePost(
    @Ctx() { connection }: MyContext,
    @Arg("id", () => Int) id: number,
    @Arg("title", () => String, { nullable: true }) title: String
  ): Promise<Post | null> {
    const postRepo = connection.getRepository(Post);
    const post = await postRepo.findOne(id);
    if (post) {
      post.title = title;
      return await postRepo.save(post);
    }
    return null;
  }

  @Mutation(() => Boolean, { nullable: true })
  async deletePost(
    @Ctx() { connection }: MyContext,
    @Arg("id", () => Int) id: number
  ): Promise<Boolean | null> {
    const postRepo = connection.getRepository(Post);
    const post = await postRepo.findOne(id);
    if (post) {
      await postRepo.remove(post);
      return true;
    }
    return null;
  }

  @Mutation(() => voteResult)
  @UseMiddleware(isLoggedIn)
  async votePost(
    @Arg("postId", () => Int) postId: number,
    @Arg("value", () => Int) value: number,
    @Ctx() { connection, req }: MyContext
  ): Promise<voteResult> {
    const postRepo = connection.getRepository(Post);
    const voteRepo = connection.getRepository(Vote);
    const userId = parseInt(req.session!.userId);
    const post = await postRepo.findOne(postId);

    if (post?.id) {
      try {
        const alreadyVoted = await voteRepo.findOne({ userId, postId });

        let voteValue: number, makingZero: Boolean;

        const magnitude = value > 0 ? 1 : -1;

        if (alreadyVoted && alreadyVoted.value !== 0) {
          makingZero = alreadyVoted.value === magnitude;
          voteValue = makingZero ? -1 * magnitude : 2 * magnitude;
        } else {
          makingZero = false;
          voteValue = magnitude;
        }

        const totalPoints = post.points + voteValue;

        const thisVote = {
          userId,
          postId,
          value: makingZero ? 0 : magnitude,
        };
        post.points = totalPoints;
        await postRepo.save(post);
        await voteRepo.save(thisVote);
        return {
          success: true,
          currentPoints: totalPoints,
          currentStatus: thisVote.value,
        };
      } catch (err) {
        return {
          success: false,
        };
      }
    } else {
      return {
        success: false,
      };
    }
  }
}

/*
  alreadyVoted && alreadyVoted.value !== 0{

    alreadyVotedValue value           makingZero        voteValue    newValue  

        1               -1    =>        false             -2            -1
        1                1    =>        true              -1             0
       -1               -1    =>        true              +1             0
       -1                1    =>        false             +2             1
  }else{

        0               -1    =>        false             -1             -1
        0                1    =>        false              +1            +1
  }
*/
