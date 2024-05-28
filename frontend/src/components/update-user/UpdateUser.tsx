import { useFindUser } from "../../hooks/requests/graphql/queries";
import { useLocalStorage } from "../../hooks";
import { Loading } from "../shared";
import { UserForm } from "./update-user-components";
import { Wrapper } from "./styles";

function UpdateUser() {
  const { localStorageData } = useLocalStorage();
  const { user, loading } = useFindUser(localStorageData.id, "edit");

  return (
    <Wrapper>
      {loading && <Loading />}
      {user && <UserForm user={user} redirect={!localStorageData.topics?.length} />}
    </Wrapper>
  );
}

export { UpdateUser };
