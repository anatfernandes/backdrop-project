import { Resolver, Mutation, Arg, Authorized, Ctx } from "type-graphql";
import { ContextType } from "../../../middlewares/authentication/types";
import * as service from "../../../services/user";
import { UpdateUserInput } from "./types";

@Resolver()
class UserMutationsResolver {
  @Authorized()
  @Mutation(() => Boolean)
  async updateUser(
    @Arg("data") data: UpdateUserInput,
    @Ctx() context: ContextType,
  ): Promise<boolean> {
    await service.updateUser({ ...data, user: context.user ?? "" });
    return true;
  }
}

export { UserMutationsResolver };
