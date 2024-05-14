import { NextFunction, Request, Response } from "express";
import * as responseHelper from "../../helpers/response.helper";
import { SchemaType, ValidateSchemaParamType } from "./types";

function validateBody<Type>(schema: SchemaType<Type>) {
  return validateSchema(schema, "body");
}

function validateParams<Type>(schema: SchemaType<Type>) {
  return validateSchema(schema, "params");
}

function validateSchema<Type>(schema: SchemaType<Type>, type: ValidateSchemaParamType) {
  return (req: Request, res: Response, next: NextFunction) => {
    const validation = schema.validate(req[type], { abortEarly: false });

    if (validation.error) {
      const errors = validation.error.details.map(({ message }) => message);
      return responseHelper.BAD_REQUEST({ res, body: errors });
    }

    next();
  };
}

export { validateBody, validateParams };
