var express = require('express');

// Création de l'app
var app = express();
const PORT = process.env.PORT || 3000;

app.use(function (req, response, next) {
  if (req.headers['x-forwarded-proto'] === 'http') {
    next();
  } else {
    res.redirect('http://' + req.hostname + req.url);
  }
});

app.use(express.static('public'));

app.listen(PORT, function(){
  console.log("Express server fonctionnel sur le port : " + PORT);
});
