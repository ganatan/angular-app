export class Name {
  name: string
  constructor() {
    this.name = '';
  }
}

export class Dependency {

  frontend: Array<Name>;
  backend: Array<Name>;

  constructor() {
    this.frontend = [];
    this.backend = [];
  }
}
