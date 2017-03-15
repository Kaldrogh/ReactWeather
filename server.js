var express = require('express');

// Création de l'app
var app = express();

app.use(express.static('public'));

app.listen(3000, function(){
  console.log("Express server fonctionnel à l'adresse localhost:3000");
});
