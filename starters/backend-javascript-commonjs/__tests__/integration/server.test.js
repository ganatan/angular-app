const request = require('supertest')
const server = require('../../src/server')

afterAll((done) => {
  server.close(done) 
})

describe('GET /persons via server.js', () => {
  test('should respond with list of persons', async () => {
    // Arrange

    // Act
    const res = await request(server).get('/persons')

    // Assert
    expect(res.statusCode).toBe(200)
    expect(Array.isArray(res.body)).toBe(true)
    expect(res.body.length).toBe(7)
    expect(res.body[0]).toHaveProperty('name')
  })
})
