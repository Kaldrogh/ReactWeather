import React from 'react';

var WeatherLocation = (props) => {
  var {temp, location} = props;
  return (
  <div>
    <p>Il fait {temp}° à {location}.</p>
  </div>
  );
}

module.exports = WeatherLocation;
