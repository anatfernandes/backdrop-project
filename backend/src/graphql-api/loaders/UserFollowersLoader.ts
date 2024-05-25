import { Follow } from "../../models";
import * as userRepository from "../../repositories/sign/sign.repository";

async function UserFollowersLoader(user: string) {
  const followers = await userRepository.findFollowers(user);

  if (!followers?.length) return [];

  const users = followers.map((follow) => follow.follower) as unknown as Follow[];
  const ids = users.map((user) => user.id);

  return userRepository.findUsersById(ids);
}

export { UserFollowersLoader };
