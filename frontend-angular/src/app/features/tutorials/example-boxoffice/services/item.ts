export class Item {
  id: number;
  youtubeLink: string;
  name: string;
  releaseDate: string;
  wikipediaLink: string;
  domestic: number;
  international: number;
  worldwide: number;
  budget: number;

  constructor() {
    this.id = 0;
    this.youtubeLink = '';
    this.name = '';
    this.releaseDate = '';
    this.wikipediaLink = '';
    this.domestic = 0;
    this.international = 0;
    this.worldwide = 0;
    this.budget = 0;
  }
}
