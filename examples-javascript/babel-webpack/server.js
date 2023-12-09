const express = require ("express");
const path = require ("path");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('dist'));

app.get("/", (req, res) => {
	console.log('00000000001:res.send');
	res.send('Hello World1111!');
})

const server = app.listen (process.env.PORT || 4000);
const portNumber = server.address().port;
console.log("ГОСПОДИН ПОРТ СЕИЧАС ОТКРЫТ "+ portNumber);