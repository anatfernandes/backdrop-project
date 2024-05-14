import Joi from "joi";

type ValidateSchemaParamType = "body" | "params";

type SchemaType<Type> = Joi.ObjectSchema<Type>;

export type { ValidateSchemaParamType, SchemaType };
