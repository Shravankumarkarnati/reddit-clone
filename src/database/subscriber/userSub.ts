import {
  EventSubscriber,
  EntitySubscriberInterface,
  InsertEvent,
} from "typeorm";
import { User } from "../entity/user";
import moment, { MomentInput } from "moment";

@EventSubscriber()
export class UserSubscriber implements EntitySubscriberInterface<User> {
  listenTo() {
    return User;
  }

  beforeInsert(event: InsertEvent<User>) {
    const user = event.entity;
    const value = moment(user.created_at as MomentInput).valueOf();
    user.cursor = value;
  }
}
