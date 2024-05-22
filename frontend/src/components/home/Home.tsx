import { useListHomePosts } from "../../hooks/requests/graphql/queries";
import { useLocale } from "../../hooks";
import { Loading, NoData } from "../shared";
import { Post } from "../post";

function Home() {
  const { t } = useLocale();
  const { posts, loading } = useListHomePosts();

  return (
    <>
      {loading && <Loading />}

      {!loading && !posts.length && <NoData>{t("Post.List.NoData")}</NoData>}
      {!loading && posts.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
}

export { Home };
