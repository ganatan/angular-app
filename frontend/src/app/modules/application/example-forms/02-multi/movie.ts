export class Movie {

  name: string;
  releaseDate: string;
  domestic: string;
  international: string;
  worldwide: string;
  franchise: boolean;

  constructor() {
    this.name = '';
    this.releaseDate = '';
    this.domestic = '';
    this.international = '';
    this.worldwide = '';
    this.franchise = false;
  }

}
