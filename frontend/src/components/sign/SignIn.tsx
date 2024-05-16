import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { api } from "../../services";
import { UserType } from "../../services/entities";
import { useToast, useForm, useLocale, useLocalStorage } from "../../hooks";
import { Form, Icon } from "../shared";
import { SignInForm } from "./types";

function SignIn() {
  const toast = useToast();
  const { t } = useLocale();
  const { addInLocalStorage } = useLocalStorage();
  const { form, handleChange, handleForm } = useForm({}, { validations });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [passwordVisibility, setPasswordVisibility] = useState({
    show: false,
    type: "password",
  });

  function validations() {
    return [
      {
        rules: [form.password.length >= 6],
        message: t("SignUp.FormValidation.PasswordMinLengthRequired"),
      },
    ];
  }

  function handleSubmit() {
    setLoading(true);

    api
      .postSignIn(form as SignInForm)
      .then((user) => {
        addInLocalStorage(user as UserType);
        toast({ type: "success", text: t("SignIn.@Submit.Success") });
        navigate("/home");
      })
      .catch((error) => {
        toast({
          type: "error",
          text: error?.cause?.message || t("SignIn.@Submit.Error"),
        });
      })
      .finally(() => setLoading(false));
  }

  function togglePasswordVisibility() {
    let newVisibility = { show: true, type: "text" };

    if (passwordVisibility.show) {
      newVisibility = { show: false, type: "password" };
    }

    setPasswordVisibility(newVisibility);
  }

  return (
    <section id="content">
      <h1>{t("SignIn.SignIn")}</h1>

      <Form onSubmit={(e) => handleForm(e, handleSubmit)}>
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
            type={passwordVisibility.type}
            placeholder={t("User.Password.Placeholder")}
            minLength={6}
            maxLength={120}
            onChange={handleChange}
          ></input>

          {passwordVisibility.show && (
            <Icon
              id="password-visibility"
              type="invisible"
              size="1.3rem"
              title={t("User.Password.Hide")}
              onClick={() => togglePasswordVisibility()}
            />
          )}

          {!passwordVisibility.show && (
            <Icon
              id="password-visibility"
              type="visible"
              size="1.3rem"
              title={t("User.Password.Show")}
              onClick={() => togglePasswordVisibility()}
            />
          )}
        </Form.FloatInputSection>

        <Form.Button type="secondary" loading={loading} disabled={loading}>
          {t("SignIn.SignInEnter")}{" "}
          <Icon type="continue" size="1.3rem" color="var(--white)" />
        </Form.Button>
      </Form>

      <span id="sign-up">
        {t("SignIn.HaveAccount")} <Link to="/sign-up">{t("SignIn.SignUp")}!</Link>
      </span>
    </section>
  );
}

export { SignIn };
