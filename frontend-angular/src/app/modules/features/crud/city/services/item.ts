export interface Item {
  id: number;
  name: string;
}

export interface Totals {
  currentPageTotals: {
    count: number;
  };
  globalTotals: {
    count: number;
  };
}

export interface ItemsResponse {
  totals: Totals;
  cities: Item[];
}

export function getDefaultItemsResponse(): ItemsResponse {
  return {
    totals: {
      currentPageTotals: { count: 0 },
      globalTotals: { count: 0 }
    },
    cities: []
  };
}

