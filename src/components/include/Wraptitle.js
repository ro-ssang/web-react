import React from 'react';

function WrapTitle({ text }) {
  return (
    <div className="wrap__title">
      <h2>
        <strong>{text[0]}</strong>
        <em>{text[1]}</em>
      </h2>
    </div>
  );
}

export default WrapTitle;
