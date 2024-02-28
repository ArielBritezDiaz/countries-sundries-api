import * as Joi from 'joi';

export const ENVVariablesSchema = Joi.object({
  PORT: Joi.number(),
  PROTOCOL: Joi.string(),
  API_VERSION: Joi.string(),
  API_KEY_HEADER: Joi.string(),
  API_KEY_TEMPORAL: Joi.string(),
  DB_NAME: Joi.string(),
  DB_HOST: Joi.string(),
  DB_PORT: Joi.number(),
  DB_USER: Joi.string(),
  DB_PASSW: Joi.string().allow('').optional(),
  DATABASE_URL: Joi.string(),
});
