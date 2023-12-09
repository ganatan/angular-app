console.log('0000000001:init');

let movies = {
  name: 'Gladiator',
  boxoffice: 1234,
}

function displayMovie(movies) {
  console.log('00000000001:displayMovie');
  console.log('00000000002:displayMovie:' + JSON.stringify(movies));
  return movies;
}


let { boxoffice: result } = displayMovie(movies);

let { name } = displayMovie(movies);
let { boxoffice2 } = displayMovie(movies);

console.log('00000000001:result:' + JSON.stringify(result));
console.log('00000000002:name:' + JSON.stringify(name));
console.log('00000000003:boxoffice2:' + JSON.stringify(boxoffice2));
