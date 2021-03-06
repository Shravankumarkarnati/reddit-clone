import { Vote } from "./../../database/entity/vote";
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
  @Field(() => Number)
  cursor: number;
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
    @Ctx() { userLoader }: MyContext
  ) {
    const ownerId = root.postOwnerId;
    return userLoader.load(ownerId);
  }

  @FieldResolver(() => Number)
  async voteStatus(
    @Root() root: Post,
    @Ctx() { req, voteStatusLoader }: MyContext
  ) {
    const postId = root.id;
    const userId = parseInt(req.session!.userId);
    if (!userId) {
      return 0;
    }
    return voteStatusLoader.load({ postId, userId });
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
      query.where("cursor <= :cursor ", {
        cursor: parseInt(cursor),
      });
    }
    const allPosts = await query.getMany();
    return {
      hasMore: allPosts.length === extra,
      posts: allPosts.slice(0, extra - 1),
      cursor: allPosts[allPosts.length - 1].cursor,
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

  @Mutation(() => Boolean, { nullable: true })
  @UseMiddleware(isLoggedIn)
  async deletePost(
    @Ctx() { connection, req }: MyContext,
    @Arg("postId", () => Int) postId: number
  ): Promise<Boolean | null> {
    const postRepo = connection.getRepository(Post);
    const post = await postRepo.findOne({ id: postId });
    const userId = req.session?.userId;
    if (!post?.id || !userId) return false;

    await postRepo.remove(post);
    return true;
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

  @Mutation(() => Post, { nullable: true })
  @UseMiddleware(isLoggedIn)
  async editPost(
    @Ctx() { connection, req }: MyContext,
    @Arg("postId", () => Int) postId: number,
    @Arg("editedTitle", () => String, { nullable: true }) editedTitle?: string,
    @Arg("editedPost", () => String, { nullable: true }) editedPost?: string
  ): Promise<Post | null> {
    const postRepo = connection.getRepository(Post);
    const post = await postRepo.findOne({ id: postId });
    const userId = req.session?.userId;
    if (!userId || !post) {
      return null;
    }
    if (editedTitle) post.title = editedTitle;
    if (editedPost) post.post = editedPost;
    const newPost = await postRepo.save(post);
    return newPost;
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
