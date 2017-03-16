import React from 'react';

var WeatherLocation = (props) => {
  var {temp, location} = props;
  return (
  <div>
    <h3 className="text-center">Il fait {temp}° à {location}.</h3>
  </div>
  );
}

module.exports = WeatherLocation;
