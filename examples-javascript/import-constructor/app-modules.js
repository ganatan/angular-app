import { movieName } from './movie-name.js';
import { movieDirector, movieDirector2 } from './movie-director.js';
import { movieClass } from './movie-class.js';
import movieDefault from './movie-default.js';
import User from './User.js';

console.log('00000000001:app-module:');

function app() {
  movieName('Gladiator');
  movieDirector('Ridley Scott');
  movieDirector2('Ridley Scott');
  movieClass('Movie Class');
  movieDefault('Avatar');

  var user = new User();
  console.log('00000000002:app-module:user');
  user.display();
  user.displayStatic();

}


app();