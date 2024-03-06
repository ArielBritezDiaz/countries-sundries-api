import { z } from 'zod';

export const regionSchema = z
  .object({
    from: z.number().gte(1).lte(6),
    take: z.number().gte(1).lte(6),
    id: z.number().gte(1).max(6),
    name: z.string().min(4).max(9),
    order_by: z.string().min(2).max(18),
    order_direction: z.string().min(3).max(4)
  }).partial()

export type RegionDTO = z.infer<typeof regionSchema>;