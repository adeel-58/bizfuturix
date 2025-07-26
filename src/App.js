// src/App.js
import React from 'react';
import './App.css';


import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Project from './components/Project';
import ClientLove from './components/ClientLove';
import Logos from './components/Logos';
import TalkToUs from './components/TalkToUs';


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <Project/>
      <ClientLove/>
      <Logos/>
      <TalkToUs/>
  
    </div>
  );
}

export default App;
