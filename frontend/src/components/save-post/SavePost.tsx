import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSavePost } from "../../hooks/requests/graphql/mutations";
import { useForm, useLocale } from "../../hooks";
import { Card, Form, Title } from "../shared";
import { TopicsSelect } from "../topics-select";
import { Links } from "./save-post-components";
import {
  CreatePostDataType,
  HandleUpdateParamsType,
  HandleUpdateContentParamsType,
  SavePostParamsType,
  TopicType,
} from "./types";

function SavePost({ defaultPost }: SavePostParamsType = {}) {
  const { t } = useLocale();
  const { handleSavePost } = useSavePost({
    onSuccess,
    type: isCreatePost() ? "create" : "update",
  });
  const { form, handleChange, updateForm, handleForm } = useForm(defaultPost, {
    validations,
    beforeSubmit,
  });
  const [loading, setLoading] = useState(false);
  const [contentLength, setContentLength] = useState(0);
  const { current: maxContentLength } = useRef(2400);
  const navigate = useNavigate();

  function isCreatePost() {
    return !Object.keys(defaultPost ?? {}).length;
  }

  function validations() {
    return [
      {
        rules: [!!form.content?.length, form.content?.length <= maxContentLength],
        message: t("Post.Save.Form.Validations.ContentLengthRequired"),
      },
      {
        rules: [!!form.topics?.length, form.topics?.length <= 3],
        message: t("Post.Save.Form.Validations.TopicsLengthRequired"),
      },
      {
        rules: [form.locale ? form.locale.length <= 30 : true],
        message: t("Post.Save.Form.Validations.LocaleLengthRequired"),
      },
      {
        rules: [form.links ? form.links.length <= 3 : true],
        message: t("Post.Save.Form.Validations.LinksLengthRequired"),
      },
    ];
  }

  function beforeSubmit() {
    if (isCreatePost()) return;

    form.id = defaultPost?.id;

    form.topics = form.topics.map((topic: string | TopicType) =>
      typeof topic === "string" ? topic : topic.id,
    );
  }

  function handleUpdateContent(e: HandleUpdateContentParamsType) {
    setContentLength(e.target.value.length);
    handleChange(e);
  }

  function handleUpdateTopics(topics: HandleUpdateParamsType) {
    updateForm({ key: "topics", value: topics });
  }

  function handleUpdateLinks(links: HandleUpdateParamsType) {
    updateForm({ key: "links", value: links });
  }

  async function handleSubmit() {
    setLoading(true);

    await handleSavePost(form as CreatePostDataType);

    setLoading(false);
  }

  function onSuccess() {
    navigate("/home");
  }

  return (
    <>
      <Title align="start">{t("Post.Save.Create")}</Title>

      <Card>
        <Form onSubmit={(e) => handleForm(e, handleSubmit)}>
          <Form.InputSection>
            <label htmlFor="content">{t("Post.Save.Form.Content.Label")}</label>
            <textarea
              id="content"
              name="content"
              placeholder={t("Post.Save.Form.Content.Placeholder")}
              maxLength={maxContentLength}
              onChange={handleUpdateContent}
              defaultValue={defaultPost?.content}
              required
            ></textarea>
            <span id="remaining-characteres">
              {contentLength} / {maxContentLength}
            </span>
          </Form.InputSection>

          <TopicsSelect
            placeholder={t("Post.Save.Form.Topics")}
            handleChange={handleUpdateTopics}
            defaultOptions={defaultPost?.topics}
            required
          />

          <Form.InputSection>
            <label htmlFor="locale">{t("Post.Locale")}</label>
            <input
              id="locale"
              type="text"
              name="locale"
              placeholder={t("Post.Save.Form.Locale")}
              defaultValue={defaultPost?.locale}
              onChange={handleChange}
            ></input>
          </Form.InputSection>

          <Links handleChange={handleUpdateLinks} defaultLinks={defaultPost?.links} />

          <Form.Button loading={loading} disabled={loading}>
            {t("Post.Save.Form.Post")}
          </Form.Button>
        </Form>
      </Card>
    </>
  );
}

export { SavePost };
