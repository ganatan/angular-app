export interface Item {
  id: number;
  name: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
}
