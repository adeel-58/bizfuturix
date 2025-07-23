// src/App.js
import React from 'react';
import './App.css';


import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Project from './components/Project';
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <Project/>
    </div>
  );
}

export default App;
