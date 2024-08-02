import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Team from './containers/Team';
import Haircolor from './containers/Haircolor';
// import Gallery from './containers/Gallery';

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
         <Haircolor />
         {/* <Gallery /> */}
      </div>
    </Router>
  );
};

export default App;
