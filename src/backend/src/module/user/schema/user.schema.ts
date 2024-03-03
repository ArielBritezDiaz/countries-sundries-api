import { z } from 'zod';

export const SignUpUserSchema = z
  .object({
    username: z.string().min(4).max(30),
    email: z.string().email().min(5).max(110),
    password: z.string().min(8).max(255)
  }).partial()

export const signInUserSchema = z
  .object({
    email: z.string().email().min(5).max(110),
    password: z.string().min(8).max(255)
  }).partial()

export type SignUpUserDTO = z.infer<typeof SignUpUserSchema>;
export type SignInUserDTO = z.infer<typeof signInUserSchema>;