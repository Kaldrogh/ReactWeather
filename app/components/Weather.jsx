import React from 'react';
import WeatherForm from 'WeatherForm';
import WeatherLocation from 'WeatherLocation';
import openWeatherMap from 'openWeatherMap';

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    }
  },
  handleSearch: function (location) {
    var self = this;

    // debugger;

    self.setState({isLoading: true});
    // Application d'une promesse (Promise) en fonction du retour de la promesse déclarée dans le fichier openWeatherMap.jsx.
    openWeatherMap.getTemp(location).then(function (temp) {
      // Si le retour est valide (fonction de retour de la promesse "resolve"), on met à jour le state de l'application en spécifiant les valeurs de la ville (location), de la température et de la phrase de chargement.
      // Utilisation de "self" pour stocker la référence à l'objet courant (Weather) étant donné que la valeur de this dans une déclaration de fonction renvoie systématiquement à l'objet global (window dans notre cas).
      self.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function (errorMessage) {
      // Si le retour est invalide (fonction de retour de la promesse "reject"), on affiche un message d'erreur et on désactive la phrase de chargement.
      alert(errorMessage);
      self.setState({isLoading:false});
    });
  },
  render: function () {
    var {isLoading, temp, location} = this.state;

    function renderMessage() {

      if (isLoading) {
        return <h3 className="text-center">Fetching weather....</h3>;
      } else if (temp && location) {
        return <WeatherLocation location={location} temp={temp}/>;
      }
    }

    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
