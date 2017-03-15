import React from 'react';
import Nav from 'Nav';

var Main = (props) => {
  return (
    <div>
      <Nav/>
      <h2>Main Componenttttt</h2>
      {props.children}
    </div>
  );
}

module.exports = Main;
