import { useState } from "react";
import { useListPosts } from "../../hooks/requests/graphql/queries";
import { useLocale } from "../../hooks";
import { ListMoreButton, Loading, NoData } from "../shared";
import { Post } from "../post";
import { SortPosts } from "./explore-components";

function Explore() {
  const { t } = useLocale();
  const { posts, loading, handleRefetchPosts, handleChangeSortPosts } = useListPosts();
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
        <>
          <SortPosts handleChangeSortPosts={handleChangeSortPosts} />

          <ListMoreButton
            type="new"
            loading={loading}
            query={handleRefetchPosts}
            handleRefetchConfig={handleRefetchConfig}
          />
        </>
      )}

      {!loading && !hasPosts() && <NoData>{t("Explore.NoData")}</NoData>}

      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}

      {loading && <Loading />}

      {hasPosts() && (
        <ListMoreButton
          type="more"
          loading={loading}
          refetch={refetch}
          query={handleRefetchPosts}
        />
      )}
    </>
  );
}

export { Explore };
