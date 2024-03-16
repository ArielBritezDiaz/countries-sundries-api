import { z } from 'zod';

export const subRegionSchema = z
  .object({
    from: z.number().gte(1).lte(37),
    take: z.number().gte(1).lte(37),
    id: z.number().gte(1).lte(37),
    name: z.string().min(9).max(35),
    id_region_fk: z.number().gte(1).lte(6),
    order_by: z.string().min(2).max(18),
    order_direction: z.string().min(3).max(4)
  }).partial()

export type SubRegionDTO = z.infer<typeof subRegionSchema>;
