import { Vote } from "./vote";
import { Post } from "./post";
import { Field, Int, ObjectType } from "type-graphql";
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Timestamp,
  UpdateDateColumn,
} from "typeorm";

@ObjectType()
@Entity()
export class User {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field(() => String)
  @Column({ unique: true })
  username!: String;

  @Column()
  password!: String;

  @Field(() => String)
  @Column({ unique: true })
  email!: String;

  @Field(() => String)
  @OneToMany(() => Post, (post) => post.postOwner)
  posts: Post[];

  @Field(() => String)
  @OneToMany(() => Vote, (vote) => vote.user)
  votes: Vote[];

  @Field(() => String)
  @CreateDateColumn({
    name: "created_at",
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP",
  })
  "created_at"!: Timestamp;

  @Field(() => String)
  @UpdateDateColumn({
    name: "updated_at",
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP",
  })
  "updated_at"!: Timestamp;
}
