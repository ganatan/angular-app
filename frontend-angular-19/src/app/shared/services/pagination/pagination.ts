export interface Pagination {
  totalItems: number;
  currentPage: number,
  perPage: number,
  totalPages: number,
  startPage: number,
  endPage: number,
  pages: number[],
  pageBrowser: boolean,
  useful: boolean,
}
