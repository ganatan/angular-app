import { z } from 'zod';

const schema = z.object({
  name: z.string({
    required_error: 'Name is required',
    invalid_type_error: 'Name must be a string',
  }).min(2, 'Name must be a string of at least 2 characters'),
});

function validateItem(data) {
  if (!data || typeof data !== 'object') {
    return { valid: false, message: 'Person Payload is required and must be a JSON object.' };
  }

  const result = schema.safeParse(data);

  if (!result.success) {
    return { valid: false, message: result.error.issues[0].message };
  }

  return { valid: true };
}

export { validateItem };
