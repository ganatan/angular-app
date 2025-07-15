export const ITEM_CONSTANTS = {
  ALREADY_EXISTS: 'City already exists',
  NOT_FOUND: 'City not found',
  NAME: 'city',
  TABLE_NAME: 'city',
  INVALID_ID: 'Invalid city Id',
} as const;

export type ItemConstantKey = keyof typeof ITEM_CONSTANTS;
export type ItemConstantValue = typeof ITEM_CONSTANTS[ItemConstantKey];
