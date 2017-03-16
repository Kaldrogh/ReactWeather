import React from 'react';
import WeatherForm from 'WeatherForm';
import WeatherLocation from 'WeatherLocation';
import openWeatherMap from 'openWeatherMap';
import ErrorModal from 'ErrorModal';

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false,

    }
  },
  handleSearch: function (location) {
    var self = this;

    // debugger;

    self.setState({
      isLoading: true,
      errorMessage: undefined
    });
    // Application d'une promesse (Promise) en fonction du retour de la promesse déclarée dans le fichier openWeatherMap.jsx.
    openWeatherMap.getTemp(location).then(function (temp) {
      // Si le retour est valide (fonction de retour de la promesse "resolve"), on met à jour le state de l'application en spécifiant les valeurs de la ville (location), de la température et de la phrase de chargement.
      // Utilisation de "self" pour stocker la référence à l'objet courant (Weather) étant donné que la valeur de this dans une déclaration de fonction renvoie systématiquement à l'objet global (window dans notre cas).
      self.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function (e) {
      // Si le retour est invalide (fonction de retour de la promesse "reject"), on affiche un message d'erreur et on désactive la phrase de chargement.
      self.setState({
        isLoading:false,
        errorMessage: e.message,
        temp: undefined,
        location: undefined
      });
    });
  },
  render: function () {
    var {isLoading, temp, location, errorMessage} = this.state;

    function renderMessage() {

      if (isLoading) {
        return <h3 className="text-center">Fetching weather....</h3>;
      } else if (temp && location) {
        return <WeatherLocation location={location} temp={temp}/>;
      }
    }

    function renderError () {

      if (typeof errorMessage === "string") {
        return (
          <div>
            <ErrorModal message={errorMessage}/>
          </div>
        );
      }
    }

    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});

module.exports = Weather;
