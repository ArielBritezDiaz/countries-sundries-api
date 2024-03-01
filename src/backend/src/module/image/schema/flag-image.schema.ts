import { z } from 'zod';

export const imageFlagSchema = z
  .object({
    from: z.number().gte(1).lte(160),
    take: z.number().gte(1).lte(160),
    id: z.number().gte(1).max(160),
    name: z.string().min(3).max(40),
    type: z.string().min(3).max(3),
    order_by: z.string().min(2).max(18),
    order_direction: z.string().min(3).max(4)
  }).partial()

export type ImageDTO = z.infer<typeof imageFlagSchema>;