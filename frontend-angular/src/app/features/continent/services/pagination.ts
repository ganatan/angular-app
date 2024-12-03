export interface Pagination {
  totalItems: number;
  currentPage: number,
  itemsPerPage: number,
  totalPages: number,
  startPage: number,
  endPage: number,
  pages: number[],
  pageBrowser: boolean,
  useful: boolean,
}
