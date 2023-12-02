import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/variables.css';
import './styles/index.css';
import './styles/header.css';
import Header from './components/Header';
import Footer from './components/Footer'; // Import the Footer component
import Home from './pages/Home';

const App = () => {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  return (
    <Router>
      <div>
        <div className="branding-bar"></div>
        <Header toggleNav={toggleNav} navActive={navActive} />
        <main>
          <section className="content" id="mainContent">
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/about" element={<About />} /> */}
            </Routes>
          </section>
        </main>
        {/* Include the Footer component */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
