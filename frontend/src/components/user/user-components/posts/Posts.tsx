import { useEffect, useState } from "react";
import { useLocale } from "../../../../hooks";
import { NoData } from "../../../shared";
import { Post } from "../../../post";
import { Wrapper } from "./styles";
import { PostsParamsType, PostsType } from "./types";

function Posts({ user, tab, ...other }: Readonly<PostsParamsType>) {
  const { t } = useLocale();
  const [posts, setPosts] = useState<PostsType>([]);

  useEffect(() => {
    let currentPosts: PostsType = [];

    if (tab === "posts") currentPosts = user.posts;
    if (tab === "liked") currentPosts = user.liked;
    if (tab === "saved") currentPosts = user.saved;

    setPosts(currentPosts);
  }, [tab, user.id, user.liked, user.posts, user.saved]);

  return (
    <Wrapper {...other}>
      {!posts.length && <NoData id="no-data">{t("Profile.NoData.Posts")}</NoData>}

      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </Wrapper>
  );
}

export { Posts };
