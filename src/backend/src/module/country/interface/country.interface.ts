export interface FormattedCountry {
  id_country?: number;
  name?: string;
  official_name?: string;
  abbr?: string;
  internet_tld?: string;
  motto?: string;
  anthem?: string;
  capital?: string;
  official_language?: string;
  population?: number;
  iso_3166_1_alpha_2?: string;
  iso_3166_1_alpha_3?: string;
  calling_code?: string;
  timezone?: string;
  coat_of_arms?: {
    id_coat_of_arms?: number;
    name?: string;
    type?: string;
    url?: string;
  };
  flag?: {
    id_flag?: number;
    name?: string;
    type?: string;
    url?: string;
  };
  currency?: {
    id_currency?: number;
    abbr?: string;
    name?: string;
    symbol?: string;
  };
  region?: {
    id_region?: number;
    name?: string;
  };
  sub_region?: {
    id_sub_region?: number;
    name?: string;
  };
}