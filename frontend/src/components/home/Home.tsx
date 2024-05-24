import { useState } from "react";
import { useListHomePosts } from "../../hooks/requests/graphql/queries";
import { useLocale } from "../../hooks";
import { ListMoreButton, Loading, NoData } from "../shared";
import { Post } from "../post";

function Home() {
  const { t } = useLocale();
  const { posts, loading, handleLoadMore } = useListHomePosts();
  const [refetch, setRefetch] = useState(false);

  function hasPosts() {
    return !!posts.length;
  }

  function handleRefetchConfig() {
    setRefetch((prev) => !prev);
  }

  return (
    <>
      {hasPosts() && (
        <ListMoreButton
          type="new"
          loading={loading}
          query={handleLoadMore}
          handleRefetchConfig={handleRefetchConfig}
        />
      )}

      {!loading && !hasPosts() && <NoData>{t("Post.List.NoData")}</NoData>}
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}

      {loading && <Loading />}

      {hasPosts() && (
        <ListMoreButton
          type="more"
          loading={loading}
          refetch={refetch}
          query={handleLoadMore}
        />
      )}
    </>
  );
}

export { Home };
