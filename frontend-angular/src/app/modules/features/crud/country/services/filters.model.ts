export interface Filters {
  page?: number | null;
  size?: number | null;
  sort?: string | null;
  name?: string | null;
  isoNumeric?: string | null;
  isoAlpha2?: string | null;
  isoAlpha3?: string | null;
  continentName?: string | null;
  continentCode?: string | null;
}
