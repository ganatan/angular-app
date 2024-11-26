'use strict';

const extractTableName = (query) => {
  const match = query.match(/FROM\s+(\w+)/i);

  return match ? match[1].toLowerCase() : null;
};

const truncate = (value, maxLength) =>
  value && value.length > maxLength ? value.slice(0, maxLength) : value;

module.exports = { extractTableName, truncate };
