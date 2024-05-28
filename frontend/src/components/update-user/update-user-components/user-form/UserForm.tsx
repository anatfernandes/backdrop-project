import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { cloneDeep, omit, pick } from "lodash";
import { useUpdateUser } from "../../../../hooks/requests/graphql/mutations";
import { useForm, useLocalStorage, useLocale, useUser } from "../../../../hooks";
import { validateImageRegex } from "../../../../utils";
import { Form } from "../../../shared";
import { TopicsSelect } from "../../../topics-select";
import {
  HandleChangeParamsType,
  HandleUpdateParamsType,
  TopicType,
  UserFormParamsType,
  UserToUpdate,
} from "./types";

function UserForm({ user, redirect }: Readonly<UserFormParamsType>) {
  const { t } = useLocale();
  const { setUser } = useUser();
  const { addInLocalStorage } = useLocalStorage();
  const { handleUpdateUser, loading } = useUpdateUser({ onSuccess });
  const { form, updateForm, handleChange, handleForm } = useForm(cloneDeep(user), {
    validations,
    beforeSubmit,
  });
  const [aboutLength, setAboutLength] = useState(user.about?.length ?? 0);
  const { current: maxAboutLength } = useRef(200);
  const navigate = useNavigate();

  function validations() {
    return [
      {
        rules: [form.name.length >= 3 && form.name.length <= 30],
        message: t("SignUp.FormValidation.NameLengthRequired"),
      },
      {
        rules: [!form.avatar ? true : validateImageRegex(form.avatar)],
        message: t("SignUp.FormValidation.AvatarExtension"),
      },
      {
        rules: [!form.background ? true : validateImageRegex(form.background)],
        message: t("User.Update.FormValidation.BackgroundExtension"),
      },
      {
        rules: [!form.about ? true : form.about.length <= 200],
        message: t("User.Update.FormValidation.AboutLengthRequired"),
      },
      {
        rules: [Array.isArray(form.topics), form.topics?.length],
        message: t("User.Update.FormValidation.TopicsRequired"),
      },
    ];
  }

  function beforeSubmit() {
    form.topics = form.topics.map((topic: string | TopicType) =>
      typeof topic === "string" ? topic : topic.id,
    );
  }

  function handleUpdateAbout(e: HandleChangeParamsType) {
    setAboutLength(e.target.value.length);
    handleChange(e);
  }

  function handleUpdateTopics(topics: HandleUpdateParamsType) {
    updateForm({ key: "topics", value: topics });
  }

  function handleSubmit() {
    handleUpdateUser(omit(form, ["id", "__typename"]) as UserToUpdate);
  }

  function onSuccess() {
    const newUser = pick(form, ["name", "avatar", "background", "topics"]);

    addInLocalStorage(newUser);
    setUser((prev) => ({ ...prev, ...newUser }));

    if (redirect) navigate("/home");
  }

  return (
    <Form onSubmit={(e) => handleForm(e, handleSubmit)}>
      <Form.InputSection>
        <label htmlFor="name">{t("User.Name.Name")}</label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder={t("User.Name.Placeholder")}
          minLength={3}
          maxLength={30}
          defaultValue={user.name}
          onChange={handleChange}
          required
        ></input>
      </Form.InputSection>

      <Form.InputSection>
        <label htmlFor="avatar">{t("User.Avatar.Avatar")}</label>
        <input
          id="avatar"
          type="url"
          name="avatar"
          autoComplete="off"
          placeholder={t("User.Avatar.Placeholder")}
          defaultValue={user.avatar}
          onChange={handleChange}
        ></input>
      </Form.InputSection>

      <Form.InputSection>
        <label htmlFor="background">{t("User.Background.Background")}</label>
        <input
          id="background"
          type="url"
          name="background"
          autoComplete="off"
          placeholder={t("User.Background.Placeholder")}
          defaultValue={user.background}
          onChange={handleChange}
        ></input>
      </Form.InputSection>

      <Form.InputSection>
        <label htmlFor="email">{t("User.Email.Email")}</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder={t("User.Email.Placeholder")}
          defaultValue={user.email}
          onChange={handleChange}
          required
          disabled
        ></input>
      </Form.InputSection>

      <Form.InputSection>
        <label htmlFor="about">{t("User.About.About")}</label>
        <textarea
          id="about"
          name="about"
          placeholder={t("User.About.Placeholder")}
          maxLength={maxAboutLength}
          defaultValue={user.about}
          onChange={handleUpdateAbout}
        ></textarea>
        <span id="remaining-characteres">
          {aboutLength} / {maxAboutLength}
        </span>
      </Form.InputSection>

      <TopicsSelect
        label={t("User.Topics.Topics")}
        placeholder={t("User.Topics.Placeholder")}
        handleChange={handleUpdateTopics}
        defaultOptions={user.topics}
        required
      />

      <Form.Button type="primary-rounded" loading={loading} disabled={loading}>
        {t("Common.Update")}
      </Form.Button>
    </Form>
  );
}

export { UserForm };
