import { MyContext } from "./../../utils/types/MyContext";
import { isLoggedIn } from "./../../utils/middleware/isLoggedIn";
import { Post } from "./../../database/entity/post";
import {
  Arg,
  Ctx,
  Field,
  InputType,
  Int,
  Mutation,
  Query,
  Resolver,
  UseMiddleware,
} from "type-graphql";

@InputType()
export class PostInputType {
  @Field()
  title!: string;
  @Field()
  post!: string;
}

@Resolver()
export class PostResolver {
  @Query(() => [Post])
  async posts(@Ctx() { connection }: MyContext): Promise<Post[]> {
    const postsRepo = await connection.getRepository(Post);
    return postsRepo.find();
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
