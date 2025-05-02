'use strict';

const request = require('supertest');
const express = require('express');
const healthRoutes = require('../../health.routes');

const app = express();
app.use('/', healthRoutes);

describe('Health Routes', () => {
  it('should respond with 200 and { status: "ok" }', async () => {
    // Arrange
    const server = request(app);

    // Act
    const response = await server.get('/health');

    // Assert
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ status: 'ok' });
  });
});
