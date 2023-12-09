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

export {
  VERSION as VERSION3,
  visible as visible3,
  Worker as Worker3
}