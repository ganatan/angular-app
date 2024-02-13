interface MovieInterface {
  name: string;
  budget: number;
}


function displayMovie(movie: MovieInterface) {
  console.log(`Nom: ${movie.name}, Age: ${movie.budget}`);
}


class MyMovie implements MovieInterface {
  name: string;
  budget: number;
  constructor() {
    this.name = '1111';
    this.budget = 2222;
  }
}

class MovieTest {

  public x: number = 7777;
  protected y: number;
  private z: number;

  constructor() {
    console.log('movieTest:constructor');
    this.x = 2222;
  }
}

const movieTest = new MovieTest();
const movieTest2 = new MovieTest();
console.log('movieTest:' + JSON.stringify(movieTest));
movieTest.x = 1111;
console.log('movieTest:' + JSON.stringify(movieTest));
console.log('movieTest:' + JSON.stringify(movieTest2));

const movie2 = new MyMovie();
movie2.budget = 7777;
movie2.name = '1111';
displayMovie(movie2);