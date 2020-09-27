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

  @Mutation(() => Boolean)
  @UseMiddleware(isLoggedIn)
  async votePost(
    @Arg("postId", () => Int) postId: number,
    @Arg("value", () => Int) value: number,
    @Ctx() { connection, req }: MyContext
  ) {
    const userId = parseInt(req.session!.userId);
    const upVote = value > 0;
    const realValue = upVote ? 1 : -1;

    const postRepo = connection.getRepository(Post);
    const voteRepo = connection.getRepository(Vote);
    const newVote = {
      userId,
      postId,
      value: realValue,
    };
    const post = await postRepo.findOne(postId);
    if (post?.id) {
      post.points = realValue + post.points;
      await postRepo.save(post);
      await voteRepo.save(newVote);
      return true;
    } else return false;
  }
}
