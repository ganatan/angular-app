export interface Filters {
  page?: number | null;
  size?: number | null;
  sort?: string | null;
  name?: string | null;
  birthDateMin?: string | null;
  birthDateMax?: string | null;
  deathDateMin?: string | null;
  deathDateMax?: string | null;
}
