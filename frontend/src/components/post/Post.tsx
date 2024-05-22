import { Footer, Header, Links } from "./post-components";
import { Wrapper } from "./styles";
import { PostParamsType } from "./types";

function Post({ post }: Readonly<PostParamsType>) {
  return (
    <Wrapper config={{ $margin: "1rem 0;" }}>
      <Header post={post} />

      <Wrapper.Divider />

      <p id="content">{post.content}</p>

      {!!post.links?.length && <Links post={post} />}

      <Wrapper.Divider />

      <Footer post={post} />
    </Wrapper>
  );
}

export { Post };
