import { useParams } from "react-router-dom";
import { useFindUser } from "../../hooks/requests/graphql/queries";
import { Loading } from "../../components/shared";
import { User } from "../../components/user";

function UserPage() {
  const params = useParams();
  const { user, loading } = useFindUser(params.id ?? "");

  return (
    <>
      {loading && (
        <main>
          <Loading />
        </main>
      )}

      {user && <User user={user} />}
    </>
  );
}

export { UserPage };
