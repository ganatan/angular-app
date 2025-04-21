import request from 'supertest'
import server from '../../src/server.js'

describe('Server startup and /persons endpoint', () => {
  afterAll(() => {
    server.close()
  })

  test('should return 200 OK and 7 persons', async () => {
    // Arrange
    const expectedLength = 7

    // Act
    const response = await request(server).get('/persons')

    // Assert
    expect(response.statusCode).toBe(200)
    expect(Array.isArray(response.body)).toBe(true)
    expect(response.body).toHaveLength(expectedLength)
    expect(response.body[0]).toHaveProperty('id')
    expect(response.body[0]).toHaveProperty('name')
  })
})
