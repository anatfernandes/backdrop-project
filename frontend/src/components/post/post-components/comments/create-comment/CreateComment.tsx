import { useState } from "react";
import { useLocale } from "../../../../../hooks";
import { useCommentPost } from "../../../../../hooks/requests/graphql/mutations";
import { Icon } from "../../../../shared";
import { Wrapper } from "./styles";
import { CreateCommentParamsType } from "./types";

function CreateComment({ post, ...other }: Readonly<CreateCommentParamsType>) {
  const { t } = useLocale();
  const { loading, handleCommentPost } = useCommentPost({ onSuccess });
  const [comment, setComment] = useState("");

  function onSuccess() {
    setComment("");
  }

  function handleComment(
    event: React.KeyboardEvent<HTMLButtonElement | HTMLInputElement>,
  ) {
    if (event.type !== "click" && event.key !== "Enter") return;
    if (!comment || loading) return;
    handleCommentPost({ post, message: comment });
  }

  return (
    <Wrapper {...other}>
      <input
        type="text"
        placeholder={t("Post.Comment.Create.Placeholder")}
        aria-label={t("Post.Comment.Create.Placeholder")}
        onChange={(e) => setComment(e.target.value)}
        onKeyUp={handleComment}
        disabled={loading}
        value={comment}
      />

      <button
        aria-label={t("Post.Comment.Comment")}
        onKeyUp={handleComment}
        disabled={loading}
      >
        <Icon
          type="send"
          title={t("Post.Comment.Comment")}
          color="var(--primary)"
          size={18}
          onClick={handleComment}
          aria-hidden
        />
      </button>
    </Wrapper>
  );
}

export { CreateComment };
