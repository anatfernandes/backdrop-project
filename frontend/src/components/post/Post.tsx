import { useState } from "react";
import { useDeletePost } from "../../hooks/requests/graphql/mutations";
import { useModal } from "../../hooks";
import { Modal } from "../shared";
import { Comments, Footer, Header, Links } from "./post-components";
import { Wrapper } from "./styles";
import { PostParamsType } from "./types";

function Post({ post }: Readonly<PostParamsType>) {
  const { handleDeletePost } = useDeletePost();
  const { modalConfig, handleCloseModal, handleOpenModal } = useModal();
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState(post.comments);

  function handleConfirmModal() {
    handleDeletePost(post.id);
  }

  function handleShowComments() {
    setShowComments((prev) => !prev);
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

      <Footer post={post} comments={comments} handleShowComments={handleShowComments} />

      {showComments && <Comments post={post.id} handleUpdateComments={setComments} />}
    </Wrapper>
  );
}

export { Post };
