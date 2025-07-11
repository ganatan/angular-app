import {
  addFilterCondition,
  adaptSortField,
  addRangeCondition,
  addDensityCondition,
  addRangeDateCondition,
} from '../../query-utils';

describe('addFilterCondition', () => {
  test('should add LIKE condition with decoded value', () => {
    const params = [];
    const result = addFilterCondition('WHERE 1=1', params, 'name', 'Actor%20Name');

    expect(result).toContain('LOWER(name) LIKE LOWER($1)');
    expect(params).toEqual(['%Actor Name%']);
  });

  test('should return original condition if value is falsy', () => {
    const params = [];
    const result = addFilterCondition('WHERE 1=1', params, 'name', null);

    expect(result).toBe('WHERE 1=1');
    expect(params).toEqual([]);
  });
});

describe('adaptSortField', () => {
  test('should map sort key and preserve ascending', () => {
    const result = adaptSortField('name', { name: 'full_name' });
    expect(result).toBe('full_name');
  });

  test('should map sort key and preserve descending', () => {
    const result = adaptSortField('-name', { name: 'full_name' });
    expect(result).toBe('-full_name');
  });

  test('should return original if no mapping', () => {
    const result = adaptSortField('title', {});
    expect(result).toBe('title');
  });
});

describe('addRangeCondition', () => {
  test('should add both min and max range conditions', () => {
    const params = [];
    const condition = addRangeCondition('WHERE 1=1', params, 'age', 18, 65, 10, 100);
    expect(condition).toContain('age >= $1');
    expect(condition).toContain('age <= $2');
    expect(params).toEqual([18, 65]);
  });

  test('should skip invalid ranges', () => {
    const params = [];
    const condition = addRangeCondition('WHERE 1=1', params, 'age', 'abc', 200, 10, 150);
    expect(condition).toBe('WHERE 1=1');
    expect(params).toEqual([]);
  });
});

describe('addDensityCondition', () => {
  test('should apply min and max density filters', () => {
    const params = [];
    const condition = addDensityCondition('WHERE 1=1', params, 50, 300);
    expect(condition).toContain('(population / NULLIF(area, 0)) >= $1');
    expect(condition).toContain('(population / NULLIF(area, 0)) <= $2');
    expect(params).toEqual([50, 300]);
  });

  test('should skip if density values are null', () => {
    const params = [];
    const condition = addDensityCondition('WHERE 1=1', params, null, null);
    expect(condition).toBe('WHERE 1=1');
    expect(params).toEqual([]);
  });
});

describe('addRangeDateCondition', () => {
  test('should add valid min and max date ranges', () => {
    const params = [];
    const condition = addRangeDateCondition(
      'WHERE 1=1',
      params,
      'birthdate',
      '01/01/2020',
      '31/12/2020',
    );
    expect(condition).toContain('birthdate >= $1');
    expect(condition).toContain('birthdate <= $2');
    expect(params[0]).toMatch(/^2020-01-01 00:00:00\+01$/);
    expect(params[1]).toMatch(/^2020-12-31 23:59:59\+01$/);
  });

  test('should skip invalid date formats', () => {
    const params = [];
    const condition = addRangeDateCondition('WHERE 1=1', params, 'birthdate', 'bad-date', null);
    expect(condition).toBe('WHERE 1=1');
    expect(params).toEqual([]);
  });
});
