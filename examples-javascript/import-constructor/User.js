class User {
  constructor() {
    console.log('00000000001:User:constructor');
  }
  // Error if static add
  // static displayStatic() {
  displayStatic() {
    console.log('00000000001:User:displayStatic');
  }
  display() {
    console.log('00000000001:User:display');
  }
}

export default User;