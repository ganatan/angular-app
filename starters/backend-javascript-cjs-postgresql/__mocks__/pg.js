'use strict';

const mockedData = [
  { id: 1, name: 'Christopher Nolan' },
  { id: 2, name: 'Quentin Tarantino' },
  { id: 3, name: 'Steven Spielberg' },
  { id: 4, name: 'Martin Scorsese' },
  { id: 5, name: 'James Cameron' },
  { id: 6, name: 'Ridley Scott' },
  { id: 7, name: 'Denis Villeneuve' },
];

class MockPool {
  query() {
    return Promise.resolve({ rows: mockedData });
  }
}

module.exports = {
  Pool: MockPool,
};
