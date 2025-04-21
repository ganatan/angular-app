import express from 'express'

const app = express()

const persons = [
  { id: 1, name: 'Christopher Nolan' },
  { id: 2, name: 'Quentin Tarantino' },
  { id: 3, name: 'Steven Spielberg' },
  { id: 4, name: 'Martin Scorsese' },
  { id: 5, name: 'James Cameron' },
  { id: 6, name: 'Ridley Scott' },
  { id: 7, name: 'Denis Villeneuve' }
]

app.get('/persons', (req, res) => {
  res.json(persons)
})

export default app


// import express from 'express'

// const app = express()
// const port = 3000

// const persons = [
//   { id: 1, name: 'Steven Spielberg' },
//   { id: 2, name: 'Martin Scorsese' },
//   { id: 3, name: 'Christopher Nolan' },
//   { id: 4, name: 'Quentin Tarantino' },
//   { id: 5, name: 'Ridley Scott' },
//   { id: 6, name: 'James Cameron' },
//   { id: 7, name: 'Alfred Hitchcock' }
// ]

// app.get('/persons', (req, res) => {
//   res.json(persons)
// })

// if (process.env.NODE_ENV !== 'test') {
//   app.listen(port, () => {
//     console.log(`Server running on http://localhost:${port}`)
//   })
// }

// export default app

