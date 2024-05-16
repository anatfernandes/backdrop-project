import Joi from "joi";

const imageFormatRegex = /\.(?:jpg|gif|png|jpeg|svg)/;

const postSignUp = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  username: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  avatar: Joi.string().uri().regex(imageFormatRegex).message("'avatar' must be a valid image"),
  password: Joi.string().min(6).max(120).required(),
});

const postSignIn = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).max(120).required(),
});

export { postSignUp, postSignIn };
