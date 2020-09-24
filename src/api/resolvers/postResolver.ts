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

  @Query(() => [Post])
  async posts(
    @Arg("limit", () => Number) limit: number,
    @Ctx() { connection }: MyContext,
    @Arg("cursor", { nullable: true }) cursor?: string
  ): Promise<Post[]> {
    const query = connection
      .createQueryBuilder()
      .select("post")
      .from(Post, "post")
      .orderBy("created_at", "DESC")
      .take(Math.min(20, limit));
    if (cursor) {
      query.where("post.created_at <= :cursor", { cursor: cursor });
    }
    return query.getMany();
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
}
