export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  NOT_FOUND: 404,
  BAD_REQUEST: 400,
  FORBIDDEN: 403,
  CONFLICT: 409,
} as const;

export type HttpStatusKey = keyof typeof HTTP_STATUS;
export type HttpStatusCode = typeof HTTP_STATUS[HttpStatusKey];
