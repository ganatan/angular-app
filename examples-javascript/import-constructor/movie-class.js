class MovieClassConstructor {

  constructor() {
    this.name = 'Polygon';
    console.log('00000000001:MovieClassConstructor:constructor');
  }

}

const movieClassConstructor = new MovieClassConstructor();

// expected output: "Polygon"



function movieClass(name) {
  console.log(movieClassConstructor.name);
  console.log('Movie class :' + name);
}

export { movieClass };