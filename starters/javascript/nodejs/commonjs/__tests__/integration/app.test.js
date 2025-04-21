const request = require('supertest')
const app = require('../../src/app')

describe('GET /persons', () => {
  test('should return list of persons', async () => {
    // Arrange

    // Act
    const res = await request(app).get('/persons')

    // Assert
    expect(res.statusCode).toBe(200)
    expect(res.body.length).toBe(7)
    expect(res.body[0]).toHaveProperty('name')
  })
})
