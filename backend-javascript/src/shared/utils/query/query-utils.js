export function addFilterCondition(condition, params, column, value) {
  const decodedValue = value ? decodeURIComponent(value) : value;
  if (decodedValue) {
    const formattedValue = `%${decodedValue}%`;
    params.push(formattedValue);

    return `${condition} AND LOWER(${column}) LIKE LOWER($${params.length})`;
  }

  return condition;
}

export function adaptSortField(sort, sortMapping) {
  const isDescending = sort.startsWith('-');
  const sortKey = isDescending ? sort.substring(1) : sort;
  const adaptedSortKey = sortMapping[sortKey] || sortKey;

  return isDescending ? `-${adaptedSortKey}` : adaptedSortKey;
}

export function addRangeCondition(
  condition,
  params,
  column,
  minValue,
  maxValue,
  minSize = 0,
  maxSize = Infinity,
) {
  if (minValue !== null) {
    const parsedMin = parseInt(minValue, 10);
    if (!isNaN(parsedMin) && parsedMin >= minSize && parsedMin <= maxSize) {
      params.push(parsedMin);
      condition += ` AND ${column} >= $${params.length}`;
    }
  }

  if (maxValue !== null) {
    const parsedMax = parseInt(maxValue, 10);
    if (!isNaN(parsedMax) && parsedMax >= minSize && parsedMax <= maxSize) {
      params.push(parsedMax);
      condition += ` AND ${column} <= $${params.length}`;
    }
  }

  return condition;
}

export function addDensityCondition(condition, params, densityMin, densityMax) {
  if (densityMin !== null) {
    params.push(parseFloat(densityMin));
    condition += ` AND (population / NULLIF(area, 0)) >= $${params.length}`;
  }

  if (densityMax !== null) {
    params.push(parseFloat(densityMax));
    condition += ` AND (population / NULLIF(area, 0)) <= $${params.length}`;
  }

  return condition;
}

export function addRangeDateCondition(condition, params, column, minDate, maxDate) {
  const parseDate = (dateString, time) => {
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
