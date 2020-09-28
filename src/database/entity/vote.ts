import { Post } from "./post";
import { User } from "./user";
// import { Field, ObjectType } from "type-graphql";
import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";

@Entity()
export class Vote {
  @PrimaryColumn()
  userId!: number;

  @ManyToOne(() => User, (user) => user.votes)
  user!: User;

  @PrimaryColumn()
  postId!: number;

  @ManyToOne(() => Post, (post) => post.votes, { onDelete: "CASCADE" })
  post!: Post;

  @Column({ type: "int" })
  value!: number;
}

/*
    User -> Post => 1 vote
    User -> Post => Multiple Post
    Post -> User => Multiple User Likes


    User -> Vote => multiple
*/
