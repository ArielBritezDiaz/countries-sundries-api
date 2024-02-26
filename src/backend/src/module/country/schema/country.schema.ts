import { z } from 'zod';

export const countrySchema = z
  .object({
    from: z.number().gte(1).lte(160),
    take: z.number().gte(1).lte(160),
    id: z.number().gte(1).max(160),
    name: z.string().min(4).max(50),
    official_name: z.string().min(5).max(80),
    abbr: z.string().min(2).max(5),
    internet_tld: z.string().min(3).max(4),
    motto: z.string().min(4).max(60),
    anthem: z.string().min(4).max(60),
    capital: z.string().min(4).max(80),
    official_language: z.string().min(3).max(40),
    population: z.number().gte(3000).lte(1500000000),
    iso_3166_1_alpha_2: z.string().min(2).max(2),
    iso_3166_1_alpha_3: z.string().min(3).max(3),
    calling_code: z.string().min(1).max(7),
    timezone: z.string().min(3).max(8),
    id_coat_of_arms_fk: z.number().gte(1).lte(164),
    coat_of_arms_name: z.string().min(3).max(40),
    coat_of_arms_type: z.string().min(3).max(3),
    id_flag_fk: z.number().gte(1).lte(163),
    flag_name: z.string().min(3).max(35),
    flag_type: z.string().min(3).max(3),
    id_currency_fk: z.number().gte(1).lte(161),
    currency_abbr: z.string().min(2).max(3),
    currency_name: z.string().min(4).max(35),
    id_region_fk: z.number().gte(1).lte(6),
    region_name: z.string().min(4).max(9),
    id_sub_region_fk: z.number().gte(1).lte(37),
    sub_region_name: z.string().min(9).max(35),
    order_by: z.string().min(2).max(18),
    order_direction: z.string().min(3).max(4)
  }).partial()

export type CountryDTO = z.infer<typeof countrySchema>;