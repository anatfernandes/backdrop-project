import { useDeletePost } from "../../hooks/requests/graphql/mutations";
import { useModal } from "../../hooks";
import { Modal } from "../shared";
import { Footer, Header, Links } from "./post-components";
import { Wrapper } from "./styles";
import { PostParamsType } from "./types";

function Post({ post }: Readonly<PostParamsType>) {
  const { handleDeletePost } = useDeletePost();
  const { modalConfig, handleCloseModal, handleOpenModal } = useModal();

  function handleConfirmModal() {
    handleDeletePost(post.id);
  }

  return (
    <Wrapper config={{ $margin: "1rem 0;" }}>
      <Modal
        type="delete-post"
        config={{ modalConfig, handleCloseModal }}
        callback={handleConfirmModal}
      />

      <Header post={post} handleOpenModal={handleOpenModal} />

      <Wrapper.Divider />

      <p id="content">{post.content}</p>

      {!!post.links?.length && <Links post={post} />}

      <Wrapper.Divider />

      <Footer post={post} />
    </Wrapper>
  );
}

export { Post };
