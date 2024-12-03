export interface Item {
  id: number;
  name: string;
  code: string;
  area: number;
  population: number;
  countriesNumber: number; 
  wikipediaLink: string;
  density: number; 
}

export interface PaginationTotals {
  count: number;
  area: number;
  population: number;
  countriesNumber: number;
  density: number; 
}

export interface AllTotals {
  count: number;
  area: number;
  population: number;
  countriesNumber: number;
  density: number; 
}

export interface ItemsResponse {
  paginationTotals: PaginationTotals;
  allTotals: AllTotals;
  continents: Item[];
}
