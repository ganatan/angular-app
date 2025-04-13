export interface Filters {
  page?: number | null;
  size?: number | null;
  sort?: string | null;
  name?: string | null;
  code?: string | null;
  areaMin?: number | null;
  areaMax?: number | null;
  populationMin?: number | null;
  populationMax?: number | null;
  countriesCountMin?: number | null;
  countriesCountMax?: number | null;
  densityMin?: number | null;
  densityMax?: number | null;
}
