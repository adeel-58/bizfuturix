import React from 'react';
import '../styles/BouncingLoader.css';

const BouncingLoader = ({ show }) => {
  if (!show) return null;

  return (
    <div className="sk-three-bounce">
      <div className="sk-child sk-bounce-1" />
      <div className="sk-child sk-bounce-2" />
      <div className="sk-child sk-bounce-3" />
    </div>
  );
};

export default BouncingLoader;
