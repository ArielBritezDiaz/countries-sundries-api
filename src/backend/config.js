import dotenv from 'dotenv';

dotenv.config()

export const PORT = process.env.PORT || 3000;

export const DB_HOST = process.env.DB_HOST;
export const DB_PORT = process.env.DB_PORT;
export const DB_USER = process.env.DB_USER;
export const DB_PASSWORD = process.env.DB_PASSWORD;
export const DB_DATABASE = process.env.DB_DATABASE;

export const DOMAIN = process.env.DOMAIN;
export const PROTOCOL = process.env.PROTOCOL;
export const HOST_SERVER = process.env.HOST_SERVER;
export const PORT_SERVER = process.env.PORT_SERVER;