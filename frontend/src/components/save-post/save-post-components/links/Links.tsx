import { useState } from "react";
import { useLocale } from "../../../../hooks";
import { Form } from "../../../shared";
import { LinksParamsType, LinksType } from "./types";

function Links({ handleChange, ...other }: Readonly<LinksParamsType>) {
  const { t } = useLocale();
  const [links, setLinks] = useState<LinksType>([]);

  function getInpuValue(id: number = -1) {
    return links[id + 1]?.value ?? "";
  }

  function handleChangeLinks(e: React.ChangeEvent<HTMLInputElement>) {
    const { id, value } = e.currentTarget;

    const linkUpdatedIndex = links.findIndex((link) => link.id === id);
    const updatedLinks = [...links];

    if (linkUpdatedIndex === -1) {
      updatedLinks.push({ id, value });
    } else if (!value) {
      updatedLinks.splice(linkUpdatedIndex, 1);
    } else {
      updatedLinks[linkUpdatedIndex].value = value;
    }

    setLinks(updatedLinks);
  }

  function handleUpdateForm() {
    handleChange(links.map((link) => link.value));
  }

  return (
    <section {...other}>
      <Form.InputSection>
        <label htmlFor="links">{t("Post.Links")}</label>
        <input
          id="links"
          type="url"
          name="links"
          autoComplete="off"
          placeholder={t("Post.Save.Form.Links")}
          value={getInpuValue()}
          onChange={handleChangeLinks}
          onBlur={handleUpdateForm}
        ></input>
      </Form.InputSection>

      {links.map((_, id) => (
        <Form.InputSection key={`save-post-link-${id}`}>
          <input
            id={`links-${id}`}
            type="url"
            name="links"
            autoComplete="off"
            placeholder={t("Post.Save.Form.Links")}
            value={getInpuValue(id)}
            onChange={handleChangeLinks}
            onBlur={handleUpdateForm}
            hidden={id >= 2}
          ></input>
        </Form.InputSection>
      ))}
    </section>
  );
}

export { Links };
