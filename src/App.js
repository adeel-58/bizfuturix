import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Nailova from './components/Nailova';


import HomePage from './pages/HomePage';
import BouncingLoader from './components/BouncingLoader';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';
import OurProjectsPage from './pages/OurProjectsPage';


function AppWrapper() {
  const [loading, setLoading] = useState(false);        // Controls loader visibility
  const [pageVisible, setPageVisible] = useState(false); // Controls page content visibility
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    setPageVisible(false); // Hide content while loading

    // Show loader for 2.8s (2 full cycles)
    const loaderTimeout = setTimeout(() => {
      setLoading(false);
    }, 1500);

    // Show page shortly *after* loader finishes
    const pageTimeout = setTimeout(() => {
      setPageVisible(true);
    }, 1500); // Wait an extra 0.5s after loader

    return () => {
      clearTimeout(loaderTimeout);
      clearTimeout(pageTimeout);
    };
  }, [location.pathname]);

  return (
    <>
      <BouncingLoader show={loading} />
      {pageVisible && (
        <>
          <Header />
          
          <Routes>
            <Route path="//start-a-project" element={<ContactUsPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<HomePage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
            <Route path="/our-projects" element={<OurProjectsPage />} />
            <Route path="/nailova" element={<Nailova />} />

          </Routes>
          <Footer />
        </>
      )}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
