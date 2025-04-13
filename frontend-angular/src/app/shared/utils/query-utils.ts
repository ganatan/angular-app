export function addFilterParam(params: URLSearchParams, key: string, value: any): void {
  if (value !== null && value !== undefined && value !== '') {
    params.set(key, encodeURIComponent(value));
  }
}
