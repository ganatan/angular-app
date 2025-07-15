// 

export const SORT_DIRECTION = {
  ASC: 'asc',
  DESC: 'desc',
} as const;

export type SortDirection = typeof SORT_DIRECTION[keyof typeof SORT_DIRECTION];
