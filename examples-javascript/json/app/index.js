/* import { display } from './example.js';

let data = { "name":"name"};

display(); */


let items =
	[
		{
			"id": 1005,
			"name": "aaaaa",
			"login": "11111",
			"firstName": "bbbbb",
			"function": "function07",
			"application": "application07",
			"role": "role07",
			"code": "AADMIN",
			"permission": "In aADMIN, valid role validations",
			"debut": "10/09/23",
			"fin": "31/12/23",
			"par": "zzzzzz",
			"self": {
				"href": "http://localhost:5203/permissions/1005"
			}
		},
		{
			"id": 1009,
			"name": "bbbbbb",
			"login": "222222",
			"firstName": "ccccc",
			"function": "function09",
			"application": "application09",
			"role": "role09",
			"code": "AADMIN",
			"permission": "In aADMIN, to view instructors menu",
			"debut": "01/05/23",
			"fin": "31/12/23",
			"par": "ddddd",
			"self": {
				"href": "http://localhost:5203/permissions/1009"
			}
		}
	];

/*function display(items) {
	items.map((currElement, index) => {
	});
} */

let item =
{
	"id": 1005,
	"name": "aaaaa",
	"login": "11111",
	"firstName": "bbbbbb",
	"function": "function07",
	"application": "application07",
	"role": "role07",
	"code": "AADMIN_ROLES_VALIDATOR",
	"permission": "In aADMIN, valid role validations",
	"debut": "10/09/23",
	"fin": "31/12/23",
	"par": "eeeeee"
}

// display(items);

function getColumns(item) {
	let keys = Object.keys(item);
	let columns = [];
	keys.map((element) => {
		columns.push({ "name": element });
	});
	return columns;
}


let columns = getColumns(item);
console.log('00000000001:' + JSON.stringify(columns));

