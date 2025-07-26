import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import BouncingLoader from './components/BouncingLoader';

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
            <Route path="/" element={<HomePage />} />
            {/* Add more routes here */}
          </Routes>
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
