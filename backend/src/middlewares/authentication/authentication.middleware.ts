import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import { AuthCheckerInterface, ResolverData } from "type-graphql";
import * as responseHelper from "../../helpers/response.helper";
import * as repository from "../../repositories/sign/sign.repository";
import { ContextType, JwtPayloadType } from "./types";

function formatToken(token: string) {
  return token?.replace("Bearer ", "");
}

function getUser(token: string) {
  const jwtSecret = process.env.JWT_SECRET ?? "JWT_SECRET";
  const payload = jwt.verify(token, jwtSecret) as JwtPayloadType;
  return payload.user;
}

async function getSessionId(user: string, token: string) {
  const session = await repository.findSessionByUser(user, token);
  return session?.id;
}

function authenticationMiddleware() {
  return async (req: Request, res: Response, next: NextFunction) => {
    const token = formatToken(req.headers["authorization"] ?? "");

    if (!token) return responseHelper.UNAUTHORIZED({ res });

    try {
      const user = getUser(token);

      const session = await getSessionId(user, token);
      if (!session) return responseHelper.UNAUTHORIZED({ res });

      res.locals.userId = user;
      res.locals.sessionId = session;

      next();
    } catch (error) {
      return responseHelper.UNAUTHORIZED({ res });
    }
  };
}

class AuthenticationChecker implements AuthCheckerInterface<ContextType> {
  async check({ context }: ResolverData<ContextType>) {
    const token = formatToken(context.token ?? "");
    if (!token) return false;

    try {
      const user = getUser(token);

      const session = await getSessionId(user, token);
      if (!session) return false;

      context.user = user;

      return true;
    } catch (error) {
      return false;
    }
  }
}

export { authenticationMiddleware, AuthenticationChecker };
