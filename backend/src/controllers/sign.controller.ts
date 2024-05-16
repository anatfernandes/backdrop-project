/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import * as responseHelper from "../helpers/response.helper";
import * as signService from "../services/sign";

async function postSignUp(req: Request, res: Response) {
  try {
    await signService.postSignUp(req.body);
    return responseHelper.CREATED({ res });
  } catch (error: any) {
    if (error.name === "Conflict") {
      const message = error.message || "This user already exists!";
      return responseHelper.CONFLICT({ res, body: { message } });
    }

    return responseHelper.SERVER_ERROR({ res });
  }
}

async function postSignIn(req: Request, res: Response) {
  try {
    const user = await signService.postSignIn(req.body);
    return responseHelper.OK({ res, body: user });
  } catch (error: any) {
    if (error.name === "NotFound") {
      return responseHelper.NOT_FOUND({ res, body: { message: error.message } });
    }

    return responseHelper.SERVER_ERROR({ res });
  }
}

export { postSignUp, postSignIn };
