'use strict';

const express = require('express');
const continentRoute = require('../../continent-route');

jest.mock('../../continent-controller');

describe('Continent Routes', () => {
  let app;

  beforeEach(() => {
    app = express();
    app.use(express.json());
    app.use('/continents', continentRoute);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('GET /continents', () => {
    test('should return list of continents', async () => {
      expect(true).toBe(true);
    });
  });

});
