const VERSION = '1.0'

class Worker {
  constructor() {
    this.name = "example_name";
  }

  setName(name) {
    this.name = name;
  }
}

function visible() {
  return true;
}

export { VERSION, visible, Worker }