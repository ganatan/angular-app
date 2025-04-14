import { z, ZodError } from 'zod';

export const professionSchema = z.object({
  name: z.string({
    required_error: 'Name is required',
    invalid_type_error: 'Name must be a string',
  }).min(2, 'Name must be a string of at least 2 characters'),
});

export type ProfessionInput = z.infer<typeof professionSchema>;

export function validateItem(data: unknown): void {
  try {
    professionSchema.parse(data);
  } catch (error) {
    if (error instanceof ZodError && error.errors.length > 0) {
      const validationError = new Error(error.errors[0].message);
      (validationError as any).status = 400;
      throw validationError;
    }
    throw error;
  }
}
