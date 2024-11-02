
// const GanatanClient = require('./toto-ganatan-adapter');
// const ganatanClient = new GanatanClient();

class Toto {
  name = '';
  code = '';
  constructor(name) {
    this.name = name;
    if (Toto.instance) {
      return Toto.instance;
    }
    Toto.instance = this;
  }

  static getInstance(name) {
    console.log('pattern-singleton1:getInstance:' + name);
    if (!Toto.instance) {
      Toto.instance = new Toto(name);
    }
    return Toto.instance;
  }

  show() {
    return 'show';
  }

  async createItem() {
  }

}

const toto1 = Toto.getInstance('1111');
const toto2 = Toto.getInstance('2222');
const toto3 = new Toto('3333');
const toto4 = new Toto('4444');

console.log('pattern-singleton1:' + JSON.stringify(toto1));
console.log('pattern-singleton2:' + JSON.stringify(toto2));
console.log('pattern-singleton3:' + JSON.stringify(toto3));
console.log('pattern-singleton4:' + JSON.stringify(toto4));
console.log('pattern-singleton5:' + Object.getOwnPropertyNames(toto1));
console.log('pattern-singleton6:' + Object.getOwnPropertyNames(toto2));
console.log('pattern-singleton7:' + Object.getOwnPropertyNames(toto3));
console.log('pattern-singleton8:' + Object.getOwnPropertyNames(toto4));
console.log('pattern-singleton9:' + Object.getOwnPropertyNames(Toto.prototype));

// test pour une classe
console.log('pattern-singleton9:' + typeof Toto);

// test pour une instance
console.log('pattern-singleton9:' + typeof toto1);

if (Toto.prototype && Toto.prototype.constructor === Toto) {
  console.log('Toto est une classe');
} else {
  console.log('Toto n\'est pas une classe');
}

if (Object.getPrototypeOf(toto1) === Toto.prototype) {
  console.log('Toto est une classe');
} else {
  console.log('Toto n\'est pas une classe');
}

// console.log( Object.getOwnPropertyNames(toto2));
// console.log( Object.getOwnPropertyNames(toto3));

// const toto1 = new Toto();
// const toto2 = new Toto();

/*
const toto1 = Toto.getInstance();
const toto2 = Toto.getInstance();
*/
/*
let Client = dbClients['pg'];
console.log( Object.getOwnPropertyNames(Client.prototype));
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(Client)));
*/
/*
console.log('dbType:', ganatanClient.dbType);
console.log('isConnected:', ganatanClient.isConnected);
console.log('name:', ganatanClient.name);
console.log('Propriétés énumérables de l\'instance :', Object.keys(ganatanClient));
console.log('Toutes les propriétés de l\'instance :', Object.getOwnPropertyNames(ganatanClient));
*/

// const dbClients2 = new GanatanClient();

// dbClients2.close();

/*
function showTitleFunction() {
}

var showTitleExpressionFunction = function () {
  this.name = 'toto';
};

var showTitleArrowFunction = () => {

};

class Media {
  static instance;
  name;
  constructor(name) {
    this.name = name;
    if (Media.instance) {
      return Media.instance;
    }
    console.log('Création de l\'instance Media');
    Media.instance = this;
  }

  showTitle() {
  }
}

const media1 = new Media('aaaa');
media1.showTitle();
const media2 = new Media('bbbb');
media2.showTitle();
console.log(media1 === media2);


const person = {
  name: 'John',
  greet: function () {
    console.log('Hello, my name is ' + this.name);
  }
};

person.greet();

showTitleFunction();
showTitleExpressionFunction();
showTitleArrowFunction();

*/

