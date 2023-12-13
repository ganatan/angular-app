class Movie {
  name: string;
  constructor() {
    this.name = 'default-name Movie';
    console.log('Class: Movie, Method: Constructor');
  }
  show() {
    console.log('Class: Movie, Method: show, ' + ' name: ' + this.name);
    // console.log('show name:' + this.name);
  }
}

const movie = new Movie();
// console.log('Movie : ' + movie);
// console.log('Movie : ' + JSON.stringify(movie));
movie.show();

movie.name = 'Exodus';
// console.log('Movie : ' + movie);
// console.log('Movie : ' + JSON.stringify(movie));
movie.show();


class ActionMovie extends Movie {

  constructor() {
    console.log('Class: ActionMovie, Method: Constructor, Before super().Movie');
    super();
    console.log('Class: ActionMovie, Method: Constructor, After super().Movie');
  }

  show() {
    console.log('Class: ActionMovie, Method: show, After super().show');
    super.show();
    console.log('Class: ActionMovie, Method: show, After super().show');
    // console.log('show action name:' + this.name);
  }
  showAction() {
    console.log('Class: ActionMovie, Method: showAction')
    // console.log('show action name:' + this.name);
  }

};


const actionMovie = new ActionMovie();
// console.log('ActionMovie : ' + actionMovie);
// console.log('ActionMovie : ' + JSON.stringify(actionMovie));
actionMovie.show();
actionMovie.showAction();

actionMovie.name = 'Kingdom of Heaven';
// console.log('ActionMovie : ' + actionMovie);
// console.log('ActionMovie : ' + JSON.stringify(actionMovie));
actionMovie.show();
actionMovie.showAction();


