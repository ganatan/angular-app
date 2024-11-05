
# Javascript : class

## class Source Code

```javascript
// example-class.js
class Movie {
  constructor(name, director) {
    this.name = name;
    this.director = director;
  }

  show() {
    console.log('show:' + movie.name);
    console.log('show:' + movie.director);
    console.log('show:' + this.#getName());
  }

  #getName() { // Private method
    return this.name;
  }

}

let movie = new Movie('Alien', 'Ridley Scott');

console.log('movie:name:' + movie.name);
console.log('movie:director:' + movie.director);

console.log('movie:Object.keys:' + Object.keys(movie))

movie.show();

// Error: private method '#getName' is not accessible
 // console.log(movie.#getName());
```

