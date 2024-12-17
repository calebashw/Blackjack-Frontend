import React from 'react';
import axios from 'axios';

function Controls() {
  const handleHit = async () => {
    await axios.post(`${process.env.REACT_APP_API_URL}/main/hit`);
  };

  const handleStand = async () => {
    await axios.post(`${process.env.REACT_APP_API_URL}/main/stand`);
  };

  const handleDoubleDown = async () => {
    await axios.post(`${process.env.REACT_APP_API_URL}/main/double-down`);
  };

  const handleSplit = async () => {
    await axios.post(`${process.env.REACT_APP_API_URL}/main/split`);
  };

  return (
    <div>
      <button onClick={handleHit}>Hit</button>
      <button onClick={handleStand}>Stand</button>
      <button onClick={handleDoubleDown}>Double Down</button>
      <button onClick={handleSplit}>Split</button>
    </div>
  );
}

export default Controls;
