import React, { useRef, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Team from './containers/Team';
import Haircolor from './containers/Haircolor';
import Gallery from './containers/Gallery';
import SkincareTreatments from './containers/SkincareTreatments';
import HaircutsStyling from './containers/HaircutsStyling';
import Appointment from './components/Appointment';
import MassageTherapy from './containers/MassageTherapy';
import Contact from './components/Contact';

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
  };
  const haircutsRef=useRef(null);
  const [showhaircuts, setShowhaircuts] = useState(false);
  const scrollToHaircut = () =>{
    setShowhaircuts(true);
    setTimeout(() => {
      haircutsRef.current.scrollIntoView({behavior:'smooth'})
    }, 100);
  }
  const massageRef=useRef(null);
  const [showmassage, setShowmassage] = useState(false);  
  const scrollToMassage = () =>{
    setShowmassage(true);
    setTimeout(()=>{
      massageRef.current.scrollIntoView({behavior:'smooth'})
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
        <Services scrollToHaircolor={scrollToHaircolor} scrollToSkintretment={scrollToSkintretment} scrollToHaircut={scrollToHaircut} scrollToMassage={scrollToMassage} />
        <div ref={haircolorRef}>
          {showHaircolor && <Haircolor />}
        </div>
        <div ref={skintretmentRef}>
          {showSkintretment && <SkincareTreatments />}
        </div>
        <div ref={haircutsRef}>
          {showhaircuts && <HaircutsStyling />}
        </div>
        <div ref={massageRef}>
           {showmassage && <MassageTherapy />}
        </div>
        <Appointment />
        <Contact />
      </div>
    </Router>
  );
};

export default App;
