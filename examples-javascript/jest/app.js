import { display1 } from './lib';

const { add, subtract, multiply } = require('./calculator');
const { add2, subtract2, multiply2 } = require('./calculator2');

console.log('00000000001:movie:');


function launch() {
	display1();
	const addition = add(1, 10);
	console.log('00000000001:' + addition);

	const subtraction = subtract(10, 1);
	console.log('00000000001:' + subtraction);

	const multiplication = multiply(2, 5);
	console.log('00000000001:' + multiplication);

}

function launch2() {
	display1();
	const addition = add(1, 10);
	console.log('00000000001:' + addition);

	const subtraction = subtract(10, 1);
	console.log('00000000001:' + subtraction);

	const multiplication = multiply(2, 5);
	console.log('00000000001:' + multiplication);

}

launch();
// launch2();

export { launch, launch2 };
