const express = require("express");
const app = express();

const hostname = '127.0.0.1';
const port = 3071;
const sqlite3 = require('sqlite3').verbose();
const DBPATH = 'db.db';

const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static("../frontend"));

app.use(express.json());

app.get('/users', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	var db = new sqlite3.Database(DBPATH); // Abre o banco
	var sql = 'SELECT * FROM CONTATOS';
	db.all(sql, [], (err, rows) => {
		if (err) {
			throw err;
		}
		res.json(rows);
	});
	db.close(); // Fecha o banco
});



//servidor iniciado
app.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});


