'use strict';

const extractTableName = (query) => {
  const match = query.match(/FROM\s+(\w+)/i);

  return match ? match[1].toLowerCase() : null;
};

module.exports = { extractTableName };
