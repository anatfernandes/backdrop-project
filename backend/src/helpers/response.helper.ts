import { Response } from "express";
import httpStatus from "http-status";

type Params<Type> = {
  res: Response;
  body?: Type;
};

function OK<Type>({ res, body }: Params<Type>) {
  return res.status(httpStatus.OK).send(body);
}

function CREATED<Type>({ res, body }: Params<Type>) {
  return res.status(httpStatus.CREATED).send(body);
}

function NO_CONTENT<Type>({ res }: Params<Type>) {
  return res.sendStatus(httpStatus.NO_CONTENT);
}

function BAD_REQUEST<Type>({ res, body }: Params<Type>) {
  return res.status(httpStatus.BAD_REQUEST).send(body);
}

function FORBIDDEN<Type>({ res, body }: Params<Type>) {
  return res.status(httpStatus.FORBIDDEN).send(body);
}

function NOT_FOUND<Type>({ res, body }: Params<Type>) {
  return res.status(httpStatus.NOT_FOUND).send(body);
}

function CONFLICT<Type>({ res, body }: Params<Type>) {
  return res.status(httpStatus.CONFLICT).send(body);
}

function UNAUTHORIZED<Type>({ res, body }: Params<Type>) {
  return res.status(httpStatus.UNAUTHORIZED).send(body);
}

function SERVER_ERROR<Type>({ res, body }: Params<Type>) {
  const message = { message: "Ocorreu um erro inesperado." };
  return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(body || message);
}

function BAD_GATEWAY<Type>({ res, body }: Params<Type>) {
  const message = { message: "Ocorreu um erro inesperado." };
  return res.status(httpStatus.BAD_GATEWAY).send(body || message);
}

export {
  OK,
  CREATED,
  NO_CONTENT,
  BAD_REQUEST,
  FORBIDDEN,
  NOT_FOUND,
  CONFLICT,
  UNAUTHORIZED,
  SERVER_ERROR,
  BAD_GATEWAY,
};
