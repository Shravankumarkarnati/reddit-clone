import { Post } from "./../../database/entity/post";
import { Arg, Ctx, Int, Mutation, Query, Resolver } from "type-graphql";

@Resolver()
export class PostResolver {
  @Query(() => [Post])
  async posts(@Ctx() { connection }: any): Promise<Post[]> {
    const postsRepo = await connection.getRepository(Post);
    return postsRepo.find();
  }

  @Query(() => Post, { nullable: true })
  async post(
    @Ctx() { connection }: any,
    @Arg("id", () => Int) id: typeof Int
  ): Promise<Post | null> {
    const postsRepo = await connection.getRepository(Post);
    return await postsRepo.findOne(id);
  }

  @Mutation(() => Post)
  async createPost(
    @Ctx() { connection }: any,
    @Arg("title", () => String) title: String
  ): Promise<Post> {
    const newPost = new Post();
    newPost.title = title;
    const postRepo = await connection.getRepository(Post);
    return await postRepo.save(newPost);
  }

  @Mutation(() => Post, { nullable: true })
  async updatePost(
    @Ctx() { connection }: any,
    @Arg("id", () => Int) id: Number,
    @Arg("title", () => String, { nullable: true }) title: String
  ): Promise<Post | null> {
    const postRepo = await connection.getRepository(Post);
    const post = await postRepo.findOne(id);
    if (post) {
      post.title = title;
      return await postRepo.save(post);
    }
    return null;
  }

  @Mutation(() => Boolean, { nullable: true })
  async deletePost(
    @Ctx() { connection }: any,
    @Arg("id", () => Int) id: Number
  ): Promise<Boolean | null> {
    const postRepo = await connection.getRepository(Post);
    const post = await postRepo.findOne(id);
    if (post) {
      await postRepo.remove(post);
      return true;
    }
    return null;
  }
}
