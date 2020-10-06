import moment, { MomentInput } from "moment";
import {
  EventSubscriber,
  EntitySubscriberInterface,
  InsertEvent,
} from "typeorm";
import { Post } from "../entity/post";

@EventSubscriber()
export class PostSubscriber implements EntitySubscriberInterface<Post> {
  listenTo() {
    return Post;
  }

  beforeInsert(event: InsertEvent<Post>) {
    const post = event.entity;
    const value = moment(post.created_at as MomentInput).valueOf();
    post.cursor = value;
  }
}
