import { z } from 'zod';

const schema = z.object({
  name: z.string({
    required_error: 'Name is required',
    invalid_type_error: 'Name must be a string',
  }).min(2, 'Name must be a string of at least 2 characters'),

});

function validateItem(data) {
  try {
    schema.parse(data);
  } catch (error) {
    if (error.errors?.length > 0) {
      const element = new Error(error.errors[0].message);
      element.status = 400;
      throw element;
    }
    throw error;
  }
}

export { validateItem };
