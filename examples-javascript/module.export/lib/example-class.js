class LoggerFactory {

  constructor() {
    console.log('00000000001:LoggerFactory:constructor');
  }

  getLogger() {
    console.log('00000000001:LoggerFactory:getLogger');
    return null;
  }

}


function display1() {
  console.log('00000000001:display1');
}

function display2() {
  console.log('00000000001:display2');
}

module.exports = {
  display1,
  display2,
  LoggerFactory
} 
