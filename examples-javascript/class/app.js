class Movie {
  constructor(name, director, date) {
    console.log('Movie Class : Constructor');
    this.name = name;
    this.director = director;
    this.date = date;
  }
}

/*let movie = {
  name: "Gladiator",
  director: "Will Alexander",
  date: "1999",
}; */


let movie = new Movie("Gladiator", "Ridley Scott", 2000);
let movie2 = new Movie("Gladiator2", "Ridley Scott2", 2002);
let movie3 = new Movie("Gladiator3", "Ridley Scott3", 2003);

console.log('movie:' + movie);
console.log('movie:' + JSON.stringify(movie));
console.log('movie:' + JSON.stringify(movie2));
console.log('movie:' + JSON.stringify(movie3));

movie.name = "Gladiator change";
console.log('movie:' + JSON.stringify(movie));

movie.weird = "add weird !!!!";
console.log('movie:' + JSON.stringify(movie));