var express = require('express');
var morgan = require('morgan');
var path = require('path');
var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/font.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'font.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

const PORT = process.env.PORT || 3000; // Use 8080 for local development because you might already have apache running on 80
app.listen(PORT, function () {
  console.log(`Resources app listening on port ${PORT}!`);
});
