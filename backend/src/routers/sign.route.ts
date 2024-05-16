import { Router } from "express";
import { validateBody } from "../middlewares";
import * as schema from "../schemas/sign.schemas";
import * as controller from "../controllers/sign.controller";

const signRoute = Router();

signRoute
  .post("/sign-up", validateBody(schema.postSignUp), controller.postSignUp)
  .post("/sign-in", validateBody(schema.postSignIn), controller.postSignIn);

export { signRoute };
