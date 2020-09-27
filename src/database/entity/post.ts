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
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP",
  })
  "created_at": Timestamp;

  @Field(() => String)
  @UpdateDateColumn({
    name: "updated_at",
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP",
  })
  "updated_at": Timestamp;
}
