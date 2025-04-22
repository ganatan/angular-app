// tests/integration/app.test.js
const request = require('supertest')
const app = require('../../src/app');

test('GET /persons retourne 200 et un tableau de 7 personnes', async () => {
  // Arrange
  const endpoint = '/persons'

  // Act
  const res = await request(app).get(endpoint)

  // Assert
  expect(res.statusCode).toBe(200)
  expect(Array.isArray(res.body)).toBe(true)
  expect(res.body).toHaveLength(7)
  expect(res.body[0]).toHaveProperty('name', 'Christopher Nolan')
})




// const request = require('supertest')
// const app = require('../../src/app')

// describe('GET /persons', () => {
//   test('should return list of persons', async () => {
//     // Arrange

//     // Act
//     const res = await request(app).get('/persons')

//     // Assert
//     expect(res.statusCode).toBe(200)
//     expect(res.body.length).toBe(7)
//     expect(res.body[0]).toHaveProperty('name')
//   })
// })
