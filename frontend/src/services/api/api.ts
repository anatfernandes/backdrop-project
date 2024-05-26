import {
  PostSignInParamsType,
  PostSignUpParamsType,
  UpsertRequestParamsType,
} from "./types";

const BASE_URI = import.meta.env.VITE_API_URI;

function createHeader() {
  const token = JSON.parse(localStorage.getItem("our-cause.com") ?? "{}")?.token;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };

  return config;
}

async function throwError(response: Response) {
  const error = await response
    .json()
    .then((parsed) => parsed)
    .catch(() => ({ message: "An error has occurred!" }));

  throw new Error("An error has occurred!", {
    cause: {
      message: error.message || error[0],
      status: response.status,
    },
  });
}

async function postRequest<Type>({
  path,
  body = {},
  haveResponse = false,
}: UpsertRequestParamsType) {
  const config = createHeader();
  const response = await fetch(`${BASE_URI}${path}`, {
    method: "POST",
    body: JSON.stringify(body),
    ...config,
  });

  if (response.status >= 400) return throwError(response);

  if (!haveResponse) return;

  return response.json() as Promise<Type>;
}

const postSignUp = (body: PostSignUpParamsType) => {
  return postRequest({ path: "/auth/sign-up", body });
};

const postSignIn = (body: PostSignInParamsType) => {
  return postRequest({ path: "/auth/sign-in", body, haveResponse: true });
};

const postSignOut = () => {
  return postRequest({ path: "/auth/sign-out" });
};

const api = {
  postSignUp,
  postSignIn,
  postSignOut,
};

export { api };
