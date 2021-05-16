export class Movie {
  name: string;
  releaseDate: string;
  franchise: boolean;
  budget: number;
  worldwide: number;
  summary: string;

  constructor() {
    this.name = '';
    this.releaseDate = '';
    this.franchise = false;
    this.budget = 0;
    this.worldwide = 0;
    this.summary = '';
  }

}
