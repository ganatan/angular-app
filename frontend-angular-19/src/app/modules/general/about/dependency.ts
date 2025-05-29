export class Name {
  name: string
  constructor() {
    this.name = '';
  }
}

export class Dependency {

  frontend: Name[];
  backend: Name[];

  constructor() {
    this.frontend = [];
    this.backend = [];
  }
}
