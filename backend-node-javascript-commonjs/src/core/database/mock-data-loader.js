'use strict';

const fs = require('fs');
const path = require('path');

const mockDataMap = {};

const mocksDirectory = process.env.NODE_ENV === 'production'
  ? path.join(__dirname, './data/mock/')
  : path.join(__dirname, '../../../data/mock/');

const getMockData = (tableName) => {
  const filePath = path.join(mocksDirectory, `${tableName}-mock.json`);
  if (fs.existsSync(filePath)) {
    const rawData = fs.readFileSync(filePath, 'utf-8');
    try {
      mockDataMap[tableName] = JSON.parse(rawData);
    } catch (error) {
      console.error(`Erreur de parsing du fichier JSON pour la table ${tableName}:`, error);

      return [];
    }

    return mockDataMap[tableName];
  }

  return [];
};

module.exports = {
  getMockData,
};
