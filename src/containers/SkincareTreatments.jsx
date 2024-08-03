import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import back4 from '../assets/Hero.png'; // Replace with actual image

const SkincareTreatments = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div className="py-6 px-4 md:px-8 lg:px-12 max-w-full mx-auto">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primaryDark mb-8 text-center" data-aos="fade-up">Skincare Treatments</h1>
      
      <div className="flex flex-col md:flex-row items-center mb-8" data-aos="fade-up" data-aos-delay="300">
        <img src={back4} alt="Skincare Treatments" className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full shadow-lg mb-4 md:mb-0 md:mr-6" />
        <div className="text-center md:text-left">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-primaryDark mb-2">Provider</h2>
          <p className="text-base md:text-lg text-primaryDark text-start">Amanda Clark, our skincare specialist, provides personalized treatments for glowing skin.</p>
        </div>
      </div>
      
      <div className="mb-6" data-aos="fade-up" data-aos-delay="600">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-primaryDark mb-2">Description</h2>
        <p className="text-base md:text-lg text-primaryDark">Personalized skincare treatments for glowing, healthy skin.</p>
      </div>
      
      <div className="text-center">
        <Link to="/services/skincare-treatments" className="text-primary font-semibold hover:underline text-lg md:text-xl">Learn More</Link>
      </div>
    </div>
  );
}

export default SkincareTreatments;
