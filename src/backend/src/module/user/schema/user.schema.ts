import { z } from 'zod';

export const userSchema = z
  .object({
    username: z.string().min(4).max(30),
    email: z.string().email().min(5).max(110),
    password: z.string().min(8).max(255)
  }).partial()

export type UserDTO = z.infer<typeof userSchema>;