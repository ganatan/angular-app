export const ITEM_CONSTANTS = {
  ALREADY_EXISTS: 'Profession already exists',
  NOT_FOUND: 'Profession not found',
  NAME: 'profession',
  TABLE_NAME: 'profession',
  INVALID_ID: 'Invalid profession Id',
} as const;

export type ItemConstantKey = keyof typeof ITEM_CONSTANTS;
export type ItemConstantValue = typeof ITEM_CONSTANTS[ItemConstantKey];
