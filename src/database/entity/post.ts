import { Vote } from "./vote";
import { User } from "../entity/user";
import { Field, Int, ObjectType } from "type-graphql";
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Timestamp,
  UpdateDateColumn,
} from "typeorm";

@ObjectType()
@Entity()
export class Post {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field(() => String)
  @Column()
  title!: String;

  @Field(() => String)
  @Column()
  post!: String;

  @Field(() => Number)
  @Column()
  postOwnerId!: Number;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.posts)
  postOwner!: User;

  @Field(() => Number)
  @Column({ default: 0 })
  points!: number;

  // @Field(() => [typeof Vote])
  @OneToMany(() => Vote, (vote) => vote.post)
  votes: Vote[];

  @Field(() => String)
  @CreateDateColumn({
    name: "created_at",
    type: "timestamp with time zone",
    default: () => "(now() at time zone 'utc')",
  })
  "created_at": Timestamp;

  @Field(() => String)
  @UpdateDateColumn({
    name: "updated_at",
    type: "timestamp with time zone",
    default: () => "(now() at time zone 'utc')",
  })
  "updated_at": Timestamp;

  @Field(() => Number)
  @Column({
    name: "cursor",
    type: "bigint",
  })
  "cursor": number;
}
