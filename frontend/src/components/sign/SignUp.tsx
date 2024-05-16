import { omitDeep } from "@apollo/client/utilities";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { api } from "../../services";
import { useToast, useForm, useLocale } from "../../hooks";
import { validateImageRegex } from "../../utils";
import { Form, Icon } from "../shared";
import { SingUpForm } from "./types";

function SignUp() {
  const toast = useToast();
  const { t } = useLocale();
  const { form, handleChange, handleForm } = useForm({}, { validations });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [passwordVisibility, setPasswordVisibility] = useState({
    password: { show: false, type: "password" },
    confirm: { show: false, type: "password" },
  });

  function validations() {
    return [
      {
        rules: [form.name.length >= 3 && form.name.length <= 30],
        message: t("SignUp.FormValidation.NameLengthRequired"),
      },
      {
        rules: [form.username.length >= 3 && form.username.length <= 30],
        message: t("SignUp.FormValidation.UsernameLengthRequired"),
      },
      {
        rules: [form.password.length <= 6],
        message: t("SignUp.FormValidation.PasswordMinLengthRequired"),
      },
      {
        rules: [form.password === form.confirmPassword],
        message: t("SignUp.FormValidation.PasswordEquality"),
      },
      {
        rules: [!form.avatar ? true : validateImageRegex(form.avatar)],
        message: t("SignUp.FormValidation.AvatarExtension"),
      },
    ];
  }

  function handleSubmit() {
    setLoading(true);
    const body = omitDeep(form, "confirmPassword") as SingUpForm;

    api
      .postSignUp(body)
      .then(() => {
        toast({ type: "success", text: t("SignUp.@Submit.Success") });
        navigate("/sign-in");
      })
      .catch((error) => {
        toast({
          type: "error",
          text: error?.cause?.message || t("SignUp.@Submit.Error"),
        });
      })
      .finally(() => setLoading(false));
  }

  function togglePasswordVisibility(field: "password" | "confirm") {
    let newVisibility = { show: true, type: "text" };

    if (passwordVisibility[field].show) {
      newVisibility = { show: false, type: "password" };
    }

    setPasswordVisibility((prev) => ({
      ...prev,
      [field]: newVisibility,
    }));
  }

  return (
    <section id="content">
      <h1>{t("SignUp.SignUp")}</h1>

      <Form onSubmit={(e) => handleForm(e, handleSubmit)}>
        <Form.FloatInputSection>
          <label htmlFor="name">{t("User.Name.Name")}</label>
          <input
            required
            id="name"
            type="text"
            name="name"
            placeholder={t("User.Name.Placeholder")}
            minLength={3}
            maxLength={30}
            onChange={handleChange}
          ></input>
        </Form.FloatInputSection>

        <Form.FloatInputSection>
          <label htmlFor="username">{t("User.Username.Username")}</label>
          <input
            required
            id="username"
            type="text"
            name="username"
            placeholder={t("User.Username.Placeholder")}
            minLength={3}
            maxLength={30}
            onChange={handleChange}
          ></input>
        </Form.FloatInputSection>

        <Form.FloatInputSection>
          <label htmlFor="avatar">{t("User.Avatar.Avatar")}</label>
          <input
            id="avatar"
            type="url"
            name="avatar"
            autoComplete="off"
            placeholder={t("User.Avatar.Placeholder")}
            onChange={handleChange}
          ></input>
        </Form.FloatInputSection>

        <Form.FloatInputSection>
          <label htmlFor="email">{t("User.Email.Email")}</label>
          <input
            required
            id="email"
            type="email"
            name="email"
            placeholder={t("User.Email.Placeholder")}
            onChange={handleChange}
          ></input>
        </Form.FloatInputSection>

        <Form.FloatInputSection>
          <label htmlFor="password">{t("User.Password.Password")}</label>
          <input
            required
            id="password"
            name="password"
            autoComplete="off"
            type={passwordVisibility.password.type}
            placeholder={t("User.Password.Placeholder")}
            minLength={6}
            maxLength={120}
            onChange={handleChange}
          ></input>

          {passwordVisibility.password.show && (
            <Icon
              id="password-visibility"
              type="invisible"
              size="1.3rem"
              title={t("User.Password.Hide")}
              onClick={() => togglePasswordVisibility("password")}
            />
          )}

          {!passwordVisibility.password.show && (
            <Icon
              id="password-visibility"
              type="visible"
              size="1.3rem"
              title={t("User.Password.Show")}
              onClick={() => togglePasswordVisibility("password")}
            />
          )}
        </Form.FloatInputSection>

        <Form.FloatInputSection>
          <label htmlFor="confirmPassword">
            {t("User.ConfirmPassword.ConfirmPassword")}
          </label>
          <input
            required
            id="confirmPassword"
            name="confirmPassword"
            autoComplete="off"
            type={passwordVisibility.confirm.type}
            placeholder={t("User.ConfirmPassword.Placeholder")}
            minLength={6}
            maxLength={120}
            onChange={handleChange}
          ></input>

          {passwordVisibility.confirm.show && (
            <Icon
              id="password-visibility"
              type="invisible"
              size="1.3rem"
              title={t("User.Password.Hide")}
              onClick={() => togglePasswordVisibility("confirm")}
            />
          )}

          {!passwordVisibility.confirm.show && (
            <Icon
              id="password-visibility"
              type="visible"
              size="1.3rem"
              title={t("User.Password.Show")}
              onClick={() => togglePasswordVisibility("confirm")}
            />
          )}
        </Form.FloatInputSection>

        <Form.Button type="secondary" loading={loading} disabled={loading}>
          {t("SignUp.SignUpImperative")}{" "}
          <Icon type="continue" size="1.3rem" color="var(--white)" />
        </Form.Button>
      </Form>

      <span id="sign-in">
        {t("SignUp.HaveAccount")}{" "}
        <Link to="/sign-in">{t("SignIn.SignInImperative")}!</Link>
      </span>
    </section>
  );
}

export { SignUp };
