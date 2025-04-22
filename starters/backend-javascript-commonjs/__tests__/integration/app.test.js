const request = require('supertest')
const app = require('../../src/app')

describe('API /persons', () => {
  test('GET /persons retourne 200 et un tableau de 7 personnes', async () => {
    // Act
    const res = await request(app).get('/persons')

    // Assert
    expect(res.statusCode).toBe(200)
    expect(Array.isArray(res.body)).toBe(true)
    expect(res.body).toHaveLength(7)
    expect(res.body[0]).toHaveProperty('name', 'Christopher Nolan')
  })
})

describe('API / (fallback)', () => {
  test('GET / retourne le texte d\'accueil', async () => {
    // Act
    const res = await request(app).get('/')

    // Assert
    expect(res.statusCode).toBe(200)
    expect(res.text).toBe('backend-javascript')
  })
})
