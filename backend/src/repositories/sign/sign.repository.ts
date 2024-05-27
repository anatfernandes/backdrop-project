import { fql } from "fauna";
import { handleQuery } from "../../database";
import { Session, User } from "../../models";
import {
  CreateUserParamsType,
  CreateSessionParamsType,
  FindSessionByUserResultType,
  FindUserResultType,
  QueryType,
  FindFollowResultType,
  UpdateUserParamsType,
  FollowUserParamsType,
  DeleteFollowUserParamsType,
} from "./types";

async function findUserById(id: string) {
  const query = fql`Users.byId(${id});`;
  const result = (await handleQuery(query)) as User;
  return result;
}

async function findUsersById(ids: string[]) {
  const query = fql`Users.where(user => ${ids}.includes(user.id));`;
  const result = (await handleQuery(query)) as FindUserResultType;
  return result?.data;
}

async function findUserByEmail(email: string) {
  const query = fql`Users.byEmail(${email});`;
  const result = (await handleQuery(query)) as FindUserResultType;
  return result?.data?.[0];
}

async function findUserByUsername(username: string) {
  const query = fql`Users.where(user => user.username.toLowerCase().includes(${username}));`;
  const result = (await handleQuery(query)) as FindUserResultType;
  return result?.data?.[0];
}

async function findUsersByNameOrUsername(name: string) {
  const query = fql`Users.where(.name.toLowerCase().includes(${name.toLowerCase()})
    || .username.toLowerCase().includes(${name.toLowerCase()}));`;

  const result = (await handleQuery(query)) as FindUserResultType;
  return result?.data;
}

async function findFollowing(follower: string) {
  const query = fql`Follows.where(.follower.id == ${follower});`;
  const result = (await handleQuery(query)) as FindFollowResultType;
  return result?.data;
}

async function findFollowers(followed: string) {
  const query = fql`Follows.where(.followed.id == ${followed});`;
  const result = (await handleQuery(query)) as FindFollowResultType;
  return result?.data;
}

async function findSessionByUser(user: string, token: string) {
  const query = fql`Sessions.firstWhere(.user == Users(${user})
    && .token == ${token} && .active == true);`;
  return (await handleQuery(query)) as FindSessionByUserResultType;
}

function createUser(data: CreateUserParamsType) {
  const query = fql`Users.create(${data});`;
  return handleQuery(query);
}

async function followUser(data: FollowUserParamsType) {
  const query = fql`Follows.create(${data})
    .update({ follower: Users.byId(${data.follower}), followed: Users.byId(${data.followed}) });`;
  return handleQuery(query);
}

function updateUser(id: string, data: UpdateUserParamsType) {
  const query = fql`Users.byId(${id})!
    .update(${data})
    .update({ topics: ${data.topics}.map(topic => Topics(topic)) });`;
  return handleQuery(query);
}

async function createSession(data: CreateSessionParamsType) {
  const createSessionQuery = fql`Sessions.create(${data as unknown as QueryType});`;
  const createdSession = (await handleQuery(createSessionQuery)) as unknown as Session;

  const updateSessionQuery = fql`Sessions.where(.id == ${createdSession.id})
    .toArray().map(session => session.update({ user: Users.byId(${data.user}) }));`;

  return handleQuery(updateSessionQuery);
}

async function finishSession(id: string) {
  const query = fql`Sessions.byId(${id})!.update({ active: false });`;
  return handleQuery(query);
}

async function deleteFollowUser(data: DeleteFollowUserParamsType) {
  const query = fql`Follows.where(
      .followed.id == ${data.followed}
      && .follower.id == ${data.follower}
    ).forEach(follow => follow.delete());`;

  return handleQuery(query);
}

export {
  findUserById,
  findUserByEmail,
  findUserByUsername,
  findUsersById,
  findUsersByNameOrUsername,
  findFollowing,
  findFollowers,
  findSessionByUser,
  createUser,
  followUser,
  updateUser,
  createSession,
  finishSession,
  deleteFollowUser,
};
