const express = require('express'); 
const app = express();
const hostname = '127.0.0.1';
const port = 3071;
const sqlite3 = require('sqlite3').verbose(); 
const DBPATH = 'db.db'; 
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static("../frontend"));
app.use(express.json());

//requisição get etapa 5
app.get('/experiencia', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); 

  var db = new sqlite3.Database(DBPATH); 
var sql = 'SELECT * FROM experiencia ORDER BY instituicao COLLATE NOCASE';
  db.all(sql, [],  (err, rows ) => {
      if (err) {
          throw err;
      }
      res.json(rows);
  });
  db.close(); 
});


//inseir experiencia
app.post('/instituicaoinsert', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "INSERT INTO experiencia (instituicao, id) VALUES ('" + req.body.title + "', 33,)";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
  });
  db.close(); // Fecha o banco
  res.end();
});


app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});