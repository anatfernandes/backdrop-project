import { truncate } from "lodash";
import { useLocale } from "../../../../hooks";
import { Wrapper } from "./styles";
import { LinksParamsType } from "./types";

function Links({ post, ...other }: Readonly<LinksParamsType>) {
  const { t } = useLocale();

  return (
    <Wrapper {...other}>
      <span>{t("Post.Links")}</span>

      <ul>
        {post.links.map((link, id) => (
          <li key={`${link}-${id}`}>
            <a href={link} target="_blank">
              {truncate(link, { length: 70 })}
            </a>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
}

export { Links };
