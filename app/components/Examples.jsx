import React from 'react';
var {Link} = require('react-router');

var Examples = () => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are a few example locations to try out.</p>
      <ol>
        <li>
          <Link to="/?location=Clermont-Ferrand">Clermont-Ferrand, France</Link>
        </li>
        <li>
          <Link to="/?location=New-York">New-York, USA</Link>
        </li>
      </ol>
    </div>
  );
};

module.exports = Examples;
