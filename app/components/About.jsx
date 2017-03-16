import React from 'react';

var About = (props) => {
  return (
    <div>
      <h1 className="text-centered page-title">About</h1>
      <p>Une application destinée à vous fournir la température de la ville de votre choix.</p>
      <ul>
        <li><a href="https://facebook.github.io/react/">React</a></li>
        <li><a href="https://heroku.com">Heroku</a></li>
      </ul>
    </div>
  );
};
module.exports = About;
