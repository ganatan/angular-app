
/*let movie = {
  name: "Gladiator",
  director: "Will Alexander",
  date: "1999",
}; */


let movies = ["Gladiator", "BlackHawk down", "Alien"];

console.log('movie:' + movies);
console.log('movie:' + JSON.stringify(movies));

console.log('movie:' + movies[0]);
console.log('movie1:' + movies[1]);
console.log('movie2:' + movies[2]);


let moviesCount = movies.length;
console.log('moviesCount:' + moviesCount);


movies.push("Kingdom of heaven"); // add one item
console.log('movie:' + JSON.stringify(movies));
console.log('moviesCount:' + movies.length);

movies.unshift("Prometheus"); // add one item on the top of list
console.log('movie:' + JSON.stringify(movies));
console.log('moviesCount:' + movies.length);

movies.pop(); // remove last item
console.log('movie:' + JSON.stringify(movies));
console.log('moviesCount:' + movies.length);

let columns = [
  { "name":"0001"},
  { "name":"0002"},
  { "name":"0003"},
  { "name":"0004"}
];

console.log('00000000001:' + JSON.stringify(columns));
columns.splice(1,1);
console.log('00000000002:' + JSON.stringify(columns));



