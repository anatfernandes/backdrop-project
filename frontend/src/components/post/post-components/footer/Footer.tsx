import { useRef, useState } from "react";
import { useLocale } from "../../../../hooks";
import { Icon } from "../../../shared";
import { Wrapper } from "./styles";
import { FooterParamsType } from "./types";

function Footer({ post, ...other }: Readonly<FooterParamsType>) {
  const { t } = useLocale();
  const { current: iconsSize } = useRef(30);
  const [reactions, setReactions] = useState(post.reactions);
  const [liked, setLiked] = useState(post.liked);
  const [saved, setSaved] = useState(post.saved);

  function toggleLike(event: React.KeyboardEvent<HTMLButtonElement>) {
    if (event.type !== "click" && event.key !== "Enter") return;

    setReactions((prev) => (liked ? prev - 1 : prev + 1));
    setLiked((prev) => !prev);
  }

  function toggleSaved(event: React.KeyboardEvent<HTMLButtonElement>) {
    if (event.type !== "click" && event.key !== "Enter") return;
    setSaved((prev) => !prev);
  }

  function compactNumber(number: number) {
    return Intl.NumberFormat("en-us", {
      notation: "compact",
    }).format(number);
  }

  return (
    <Wrapper {...other}>
      <button
        aria-label={t(`Post.Card.${liked ? "Unlike" : "Like"}`)}
        onKeyUp={toggleLike}
      >
        {!liked && (
          <Icon
            type="heart"
            title={t("Post.Card.Like")}
            color="var(--dark-gray)"
            onClick={toggleLike}
            aria-hidden
          />
        )}

        {liked && (
          <Icon
            type="heart-full"
            title={t("Post.Card.Unlike")}
            color="var(--red)"
            size={iconsSize}
            onClick={toggleLike}
            aria-hidden
          />
        )}

        <span id="quantity">{compactNumber(reactions)}</span>
      </button>

      <button aria-label={t("Post.Card.Comment")}>
        <Icon
          type="comment"
          title={t("Post.Card.Comment")}
          color="var(--secondary)"
          size={iconsSize}
          aria-hidden
        />

        <span id="quantity">{compactNumber(post.comments)}</span>
      </button>

      <button
        aria-label={t(`Post.Card.${saved ? "Unsaved" : "Saved"}`)}
        onKeyUp={toggleSaved}
      >
        {!saved && (
          <Icon
            type="bookmarks"
            title={t("Post.Card.Saved")}
            color="var(--dark-gray)"
            size={iconsSize}
            onClick={toggleSaved}
            aria-hidden
          />
        )}

        {saved && (
          <Icon
            type="bookmarks"
            title={t("Post.Card.Unsaved")}
            color="var(--gold)"
            size={iconsSize}
            onClick={toggleSaved}
            aria-hidden
          />
        )}
      </button>
    </Wrapper>
  );
}

export { Footer };
