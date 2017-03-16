var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/find?appid=d56b1c9183a1b28599d7d3c039914714&units=metric';

// d56b1c9183a1b28599d7d3c039914714 q=London&

module.exports = {
  getTemp : function (location) {
    var self = this;
    // Ecnoder la ville passée par le formulaire afin de conserver l'intégrité de l'URL et éviter que le naviguateur ne remplace certains caractères pouvant rendre l'URL invalide.
    var encodedLocation = encodeURIComponent(location);
    // Concaténation de la constante URL spécifiée ci-dessus et de la ville correctement encodée.
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
    // Utilisation d'une promesse (Promise), fonctionnalité implémentée par ES6 et matérialisé par le ".then(resolve, reject)" qui supplante le callback classique et renvoie deux fonctions (resolve, reject), chaque fonction gérant le retour positif (resolve) ou négatif(reject) de la requête initiale à l'API  d'openWeatherMap.
    return axios.get(requestUrl).then(function (res) {
      var cityReq = location.toUpperCase().replace(/[^\w\s]/gi, ' ');
      var nameFetch = res.data.list[0].name.toUpperCase().replace(/[^\w\s]/gi, ' ');
      // Fonction gérant un retour positif (resolve) => function (res) {} <=, si le résultat JSON comporte une liste de noeuds vide, cela signifie que le retour s'est bien passé mais que l'api n'a pas trouvé de ville correspondante.
      if (res.data.list.length === 0 || nameFetch !== cityReq ) {
        console.log('Résultat openWeatherMap : ' + nameFetch + ", requête utilisateur : " + cityReq);
        // Dans ce cas, on déclenche une erreur.
        throw new Error(res.data.message);

      } else {
        // Sinon, on récupère le premier objet à l'index 0 du tableau "list" afin d'obtenir la température correspondante.
        return res.data.list[0].main.temp;
      }
    }, function (res) {
      // Fonction reject, dans le cas où le retour JSON renvoyé par l'api est invalide, vide, ou autre.
      throw new Error(res.data.message);
    });
  }
}
