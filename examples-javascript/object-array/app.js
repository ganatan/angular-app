let movie = {
  name: "Gladiator",
  director: "Ridley Scott",
  date: "2000",
};
let movieName = movie.name;
let movieDirector = movie.director;
let movieDate = movie.date;
let movieUndefined = movie.undefined;   // undefined

console.log('movieName:' + movieName);
console.log('movieDirector:' + movieDirector);
console.log('movieDate:' + movieDate);
console.log('movieUndefined:' + movieUndefined);


console.log('movie:' + movie);
console.log('movie:' + JSON.stringify(movie));


// notation bracket (bracket notation)
console.log('bracket movieName:' + movie['name']);
console.log('movieDirector:' + movie['director']);
console.log('movieDate:' + movie['date']);
console.log('movieUndefined:' + movie['undefined']);
// console.log('movieUndefined:' + movie.get('name')); // error movie.get is not a function



let item = { "login": "0001login", "name": "0001name", "firstName": "0001firstName", "function": "0001Function" };
console.log('item:' + JSON.stringify(item));

let itemLogin = item['login'];
console.log('itemLogin:' + JSON.stringify(itemLogin));


let itemArray =
  [
    { "login": "0001login", "name": "0001name", "firstName": "0001firstName", "function": "0001Function" },
    { "login": "0002login", "name": "0002name", "firstName": "0002firstName", "function": "0002Function" },
    { "login": "0003login", "name": "0003name", "firstName": "0003firstName", "function": "0003Function" },
    { "login": "0004login", "name": "0004name", "firstName": "0004firstName", "function": "0004Function" },
  ];
console.log('itemArray:' + JSON.stringify(itemArray));

let item0001 = itemArray[0];
console.log('item0001:' + JSON.stringify(item0001));
item0001 = itemArray[0]['login'];
console.log('item0001:' + JSON.stringify(item0001));

let object0001 = { "login": "0001login", "name": "0001name", "firstName": "0001firstName", "function": "0001Function" };
console.log('object0001:' + JSON.stringify(object0001['login']));


let columns = [
  { "name": "Login" },
  { "name": "Nom" },
  { "name": "Prénom" },
  { "name": "Fonction" },
  { "name": "Application" },
  { "name": "Rôle" },
  { "name": "Permission" },
  { "name": "Début" },
  { "name": "Fin" },
  { "name": "Par" },
]
console.log('columns:' + JSON.stringify(columns[0]['name']));
console.log('columns:' + JSON.stringify(columns[1]['name']));

let item2 =
  [
    {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      "userId": 1,
      "id": 2,
      "title": "qui est esse",
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
      "userId": 1,
      "id": 3,
      "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
      "userId": 1,
      "id": 4,
      "title": "eum et est occaecati",
      "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    }
  ]

let size = Object.keys(item2).length;
console.log('00000000001:' + size);

