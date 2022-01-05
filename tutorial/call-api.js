var express = require('express');
var app = express();
var morgan = require('morgan');
var users = [
  { id: 1, name: 'alice' },
  { id: 2, name: 'bek' },
  { id: 3, name: 'chris' },
];

app.use(morgan('dev'));

app.get('/users', (req, res) => {
  res.json(users);
});

app.listen(3000, console.log('Example app listening on port 3000!'));
