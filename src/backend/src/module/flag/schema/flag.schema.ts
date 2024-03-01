import { z } from 'zod';

export const flagSchema = z
  .object({
    from: z.number().gte(1).lte(163),
    take: z.number().gte(1).lte(163),
    id: z.number().gte(1).lte(163),
    name: z.string().min(4).max(35),
    type: z.string().min(3).max(3),
    order_by: z.string().min(2).max(18),
    order_direction: z.string().min(3).max(4)
  }).partial()

export type FlagDTO = z.infer<typeof flagSchema>;