import { Follow } from "../../models";
import * as userRepository from "../../repositories/sign/sign.repository";

async function FollowingLoader(user: string) {
  const following = await userRepository.findFollowing(user);

  if (!following?.length) return [];

  const users = following.map((follow) => follow.followed) as unknown as Follow[];
  const ids = users.map((user) => user.id);

  return userRepository.findUsersById(ids);
}

export { FollowingLoader };
