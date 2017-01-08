
const express = require('express');
const app = express();
const db = require('./db/db.js');
// const path = require('path');
const router = require('./routes.js');
const bodyParser = require('body-parser');

//  TODO: Link Front-End Static Files
// app.use(express.static(path.join(__dirname, '../client/dist')));

app.use( (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());

app.post('/login', (req, res) => {
  res.send({ success: true });
});

app.post('/signup', (req, res) => {
  res.send({ success: true });
});

app.use('/api', router);

app.get('/', (req, res) => {
  res.send('Hello from the Server!');
});

app.listen(3000, () => {
//  TODO: Delete testing listen function below, uncomment app.listen
  console.log('Example app listening on port 3000!');
});

// app.listen(3000);
