import { Movie } from './movie';

export class Show extends Movie {
  channel: string;

  constructor() {
    super();
  }

  changeName(): void {
    super.changeName();
  }

}
