export interface PaginationMetadata {
  pagination: {
    currentPage: number;
    perPage: number;
    totalItems: number;
    totalPages: number;
  };
}

export interface PaginatedResult<T> {
  metadata: PaginationMetadata;
  data: T[];
}
