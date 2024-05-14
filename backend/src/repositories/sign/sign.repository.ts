import { fql } from "fauna";
import { handleQuery } from "../../database";
import { CreateUserParamsType, FindUserResultType } from "./types";

async function findUserByEmail(email: string) {
  const query = fql`Users.where(user => user.email.toLowerCase().includes(${email}));`;
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
    || u.username.toLowerCase().includes(${name}))`;

  const result = (await handleQuery(query)) as FindUserResultType;
  return result?.data;
}

function createUser(data: CreateUserParamsType) {
  const query = fql`Users.create(${data})`;
  return handleQuery(query);
}

export { findUserByEmail, findUserByUsername, findUsersByNameOrUsername, createUser };
