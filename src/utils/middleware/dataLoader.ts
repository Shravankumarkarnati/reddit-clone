import { Vote } from "./../../database/entity/vote";
import { Connection } from "typeorm";
import { User } from "./../../database/entity/user";
import DataLoader from "dataloader";

export const userLoader = () =>
  new DataLoader(async (ids) => {
    return ids;
  });

export const voteStatusLoader = () =>
  new DataLoader(async (ids) => {
    return ids;
  });

export const dataLoader = (connection: Connection) => {
  return {
    userLoader: () =>
      new DataLoader<number, String>(async (ids) => {
        const userRepo = connection.getRepository(User);
        const users = await userRepo.findByIds(ids as number[]);
        const mapper: Record<number, User> = {};
        users.forEach((user) => {
          mapper[user.id] = user;
        });
        return ids.map((id) => mapper[id].username);
      }),
    voteStatusLoader: () =>
      new DataLoader<{ postId: number; userId: number }, number>(
        async (keys) => {
          const voteRepo = connection.getRepository(Vote);
          const votes = await voteRepo.findByIds(keys as any);
          const mapper: Record<string, number> = {};
          votes.forEach((vote) => {
            mapper[`${vote.userId}|${vote.postId}`] = vote.value;
          });
          const returnValues = keys.map((key) => {
            const slug = `${key.userId}|${key.postId}`;
            if (mapper[slug]) return mapper[slug];
            else return 0;
          });
          return returnValues;
        }
      ),
  };
};
