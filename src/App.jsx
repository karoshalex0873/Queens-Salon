import React, { useRef, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Team from './containers/Team';
import Haircolor from './containers/Haircolor';
import Gallery from './containers/Gallery';
import SkincareTreatments from './containers/SkincareTreatments';

const App = () => {
  const haircolorRef = useRef(null);
  const [showHaircolor, setShowHaircolor] = useState(false);

  const scrollToHaircolor = () => {
    setShowHaircolor(true);
    setTimeout(() => {
      haircolorRef.current.scrollIntoView({ behavior: 'smooth' });
    }, 100); // Ensure the component is visible before scrolling
  };

  const skintretmentRef=useRef(null);
  const [showSkintretment, setShowSkintretment] = useState(false);
  const scrollToSkintretment = () =>{
    setShowSkintretment(true)
    setTimeout(() =>{
      skintretmentRef.current.scrollIntoView({behavior: 'smooth'});
    },100);
  }

  return (
    <Router>
      <div>
        <Hero />
        <About />
        <Routes>
          <Route path="/team" element={<Team />} />
        </Routes>
        <Services scrollToHaircolor={scrollToHaircolor} scrollToSkintretment={scrollToSkintretment} />
        <div ref={haircolorRef}>
          {showHaircolor && <Haircolor />}
        </div>
        <div ref={skintretmentRef}>
          {showSkintretment && <SkincareTreatments />}
        </div>
      </div>
    </Router>
  );
};

export default App;
