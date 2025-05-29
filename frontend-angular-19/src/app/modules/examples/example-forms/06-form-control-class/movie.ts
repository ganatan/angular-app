export class Movie {

  name: string;
  releaseDate: string;
  franchise: boolean;
  budget: number;
  worldwide: number;
  summary: string;
  
  constructor() {
    this.name = '';
    this.releaseDate = '03/01/1892';
    this.franchise = false;
    this.budget = 0;
    this.worldwide = 0
    this.summary = '';
  }

}
