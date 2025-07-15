import { z as zod, ZodError } from 'zod';

const schema = zod.object({
  name: zod
    .string({
      required_error: 'Name is required',
      invalid_type_error: 'Name must be a string',
    })
    .min(2, 'Name must be a string of at least 2 characters'),
});

export type CityInput = zod.infer<typeof schema>;

export function validateItem(data: unknown): void {
  try {
    schema.parse(data);
  } catch (error) {
    if (error instanceof ZodError && error.errors.length > 0) {
      const validationError = new Error(error.errors[0].message) as Error & { status?: number };
      validationError.status = 400;
      throw validationError;
    }
    throw error;
  }
}
