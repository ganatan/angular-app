export function addFilterCondition(
  condition: string,
  params: (string | number)[],
  column: string,
  value: string | undefined,
): string {
  const decodedValue = value ? decodeURIComponent(value) : value;
  if (decodedValue) {
    const formattedValue = `%${decodedValue}%`;
    params.push(formattedValue);

    return `${condition} AND LOWER(${column}) LIKE LOWER($${params.length})`;
  }

  return condition;
}

export function adaptSortField(
  sort: string,
  sortMapping: Record<string, string>,
): string {
  const isDescending = sort.startsWith('-');
  const sortKey = isDescending ? sort.substring(1) : sort;
  const adaptedSortKey = sortMapping[sortKey] || sortKey;

  return isDescending ? `-${adaptedSortKey}` : adaptedSortKey;
}

export function addRangeCondition(
  condition: string,
  params: (number | string)[],
  column: string,
  minValue: number | string | null,
  maxValue: number | string | null,
  minSize = 0,
  maxSize = Infinity,
): string {
  if (minValue !== null) {
    const parsedMin = parseInt(String(minValue), 10);
    if (!isNaN(parsedMin) && parsedMin >= minSize && parsedMin <= maxSize) {
      params.push(parsedMin);
      condition += ` AND ${column} >= $${params.length}`;
    }
  }

  if (maxValue !== null) {
    const parsedMax = parseInt(String(maxValue), 10);
    if (!isNaN(parsedMax) && parsedMax >= minSize && parsedMax <= maxSize) {
      params.push(parsedMax);
      condition += ` AND ${column} <= $${params.length}`;
    }
  }

  return condition;
}

export function addDensityCondition(
  condition: string,
  params: number[],
  densityMin: number | null,
  densityMax: number | null,
): string {
  if (densityMin !== null) {
    params.push(densityMin);
    condition += ` AND (population / NULLIF(area, 0)) >= $${params.length}`;
  }

  if (densityMax !== null) {
    params.push(densityMax);
    condition += ` AND (population / NULLIF(area, 0)) <= $${params.length}`;
  }

  return condition;
}

export function addRangeDateCondition(
  condition: string,
  params: string[],
  column: string,
  minDate: string | undefined,
  maxDate: string | undefined,
): string {
  const parseDate = (dateString: string, time: string): string | null => {
    if (!dateString) {
      return null;
    }
    const decodedDate = decodeURIComponent(dateString);
    const [day, month, year] = decodedDate.split('/');
    const isoDate = `${year}-${month}-${day} ${time}+01`;

    return !isNaN(Date.parse(isoDate)) ? isoDate : null;
  };

  if (minDate) {
    const parsedMinDate = parseDate(minDate, '00:00:00');
    if (parsedMinDate) {
      params.push(parsedMinDate);
      condition += ` AND ${column} >= $${params.length}`;
    }
  }

  if (maxDate) {
    const parsedMaxDate = parseDate(maxDate, '23:59:59');
    if (parsedMaxDate) {
      params.push(parsedMaxDate);
      condition += ` AND ${column} <= $${params.length}`;
    }
  }

  return condition;
}
