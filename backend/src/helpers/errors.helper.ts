function notFoundError(message = ""): ErrorType {
  return {
    name: "NotFound",
    message,
  };
}

function badRequestError(message = ""): ErrorType {
  return {
    name: "BadRequest",
    message,
  };
}

function forbiddenError(message = ""): ErrorType {
  return {
    name: "Forbidden",
    message,
  };
}

function unauthorizedError(message = ""): ErrorType {
  return {
    name: "Unauthorized",
    message,
  };
}

function conflictError(message = ""): ErrorType {
  return {
    name: "Conflict",
    message,
  };
}

function signInError(message = ""): ErrorType {
  return {
    name: "SignIn",
    message,
  };
}

function signUpError(message = ""): ErrorType {
  return {
    name: "SignUp",
    message,
  };
}

export type ErrorType = {
  name: string;
  message: string;
};

export {
  notFoundError,
  badRequestError,
  forbiddenError,
  unauthorizedError,
  conflictError,
  signInError,
  signUpError,
};
