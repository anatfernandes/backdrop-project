import { fql } from "fauna";
import { handleQuery } from "../../database";
import { Session } from "../../models";
import { CreateUserParamsType, CreateSessionParamsType, FindUserResultType, QueryType } from "./types";

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
  const query = fql`Users.where(u => u.name.toLowerCase().includes(${name})
    || u.username.toLowerCase().includes(${name}));`;

  const result = (await handleQuery(query)) as FindUserResultType;
  return result?.data;
}

function createUser(data: CreateUserParamsType) {
  const query = fql`Users.create(${data});`;
  return handleQuery(query);
}

async function createSession(data: CreateSessionParamsType) {
  const createSessionQuery = fql`Sessions.create(${data as unknown as QueryType});`;
  const createdSession = (await handleQuery(createSessionQuery)) as unknown as Session;

  const updateSessionQuery = fql`Sessions.where(.id == ${createdSession.id})
    .toArray().map(session => session.update({ user: Users.byId(${data.user}) }));`;

  return handleQuery(updateSessionQuery);
}

export { findUserByEmail, findUserByUsername, findUsersByNameOrUsername, createUser, createSession };
