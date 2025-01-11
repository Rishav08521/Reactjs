import React from 'react';

const Cell = ({ data, onClick }) => (
  <div className="cell" onClick={onClick}>
    {data.value}
  </div>
);