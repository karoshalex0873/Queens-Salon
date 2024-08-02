import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Team from './containers/Team';

const App = () => {
  return (
    <Router>
      <div className="">
        <Hero />
        <About />
        <Routes>
          <Route path="/team" element={<Team />} />
        </Routes>
        <Services />
      </div>
    </Router>
  );
};

export default App;
