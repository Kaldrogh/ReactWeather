import React from 'react';

var ErrorModal = React.createClass({
  componentDidMount: function () {
    var modal = new Foundation.Reveal($("#error-modal"));
    modal.open();
  },
  render: function () {
    return (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>ErrorModal Title</h4>
        <p>This is an error message.</p>
        <p>
          <button className="button" data-close="">Alright</button>
        </p>
      </div>
    );
  }

});

module.exports = ErrorModal;
