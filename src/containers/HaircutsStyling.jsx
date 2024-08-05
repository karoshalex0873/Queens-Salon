import React, { useState, useEffect, useRef, useCallback } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaStar } from 'react-icons/fa';
import { useSpring, animated } from '@react-spring/web';
import haircut1 from '../assets/Hero.png';
import haircut2 from '../assets/Hero.png';
import haircut3 from '../assets/Hero.png';

const HaircutsStyling = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [showInfo, setShowInfo] = useState(false);
  const images = [haircut1, haircut2, haircut3];
  const timerRef = useRef(null);

  const handleNextImage = useCallback(() => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });

    timerRef.current = setInterval(handleNextImage, 3000);
    return () => clearInterval(timerRef.current);
  }, [handleNextImage]);

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  const fadeIn = useSpring({
    opacity: showInfo ? 1 : 0,
    transform: showInfo ? 'translateY(0)' : 'translateY(-20px)',
  });

  return (
    <div className="py-12 px-4 sm:px-6 md:px-8 bg-gray-300 rounded-xl shadow-lg container mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-primaryDark mb-10" data-aos="fade-up">Haircuts & Styling</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <div className="space-y-8">
          <div className="text-center" data-aos="fade-right">
            <h2 className="text-2xl md:text-3xl font-serif text-secondary mb-4">Stylists</h2>
            <img
              data-aos="zoom-out fade-up"
              data-aos-delay="600"
              className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 mx-auto object-cover rounded-full shadow-lg"
              src={haircut1} alt="Stylist" />
            <h3 data-aos="zoom-out fade-up" data-aos-delay="800" className="text-xl md:text-2xl font-serif mt-4">Alex Johnson</h3>
            <p className="text-base md:text-lg text-primaryDark mt-2">Our experienced stylist specializes in modern haircuts and styling techniques.</p>
          </div>

          <div className="text-center" data-aos="fade-left" data-aos-delay="800">
            <h2 className="text-xl md:text-2xl font-semibold text-primaryDark mb-2">Qualifications</h2>
            <p className="text-base md:text-lg text-primaryDark text-start">Alex has over 15 years of experience in the hair industry and holds certifications from top styling academies.</p>
          </div>

          <div className="text-center" data-aos="fade-right" data-aos-delay="1000">
            <h2 className="text-xl md:text-2xl font-semibold text-primaryDark mb-2">Specializations</h2>
            <ul className="list-disc list-inside text-base md:text-lg text-primaryDark  text-start px-3">
              <li>Modern Haircuts</li>
              <li>Coloring and Highlights</li>
              <li>Updos and Formal Styling</li>
              <li>Men's Grooming</li>
              <li>Children's Haircuts</li>
            </ul>
          </div>
        </div>

        <div className="space-y-6 relative">
          <div data-aos="fade-up" data-aos-delay="600" className="text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl font-semibold text-primaryDark mb-2">Available Days</h2>
            <p className="text-base md:text-lg text-primaryDark">We offer Haircut & Styling services from Monday to Saturday, 9 AM - 8 PM.</p>
          </div>

          <div className="overflow-hidden rounded-2xl bg-primaryDark p-4 relative">
            <animated.div style={fadeIn}>
              <img className="w-full h-auto rounded-xl transform transition duration-700 ease-in-out hover:scale-105" src={images[currentImage]} alt="Haircut" />
            </animated.div>
          </div>

          <div className="text-center lg:text-left space-y-3">
            <h3 className="italic text-xl md:text-2xl font-light">Transform Your Look</h3>
            <div>
              <h4 className="text-lg md:text-xl font-normal text-primaryDark">4.8 rating</h4>
              <div className="flex justify-center lg:justify-start text-orange-300">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
            </div>
            <button
              className="bg-gradient-to-r from-primaryDark to-primary border-2 border-white rounded-full px-6 py-3 font-semibold text-white hover:scale-105 transition duration-200"
              onClick={toggleInfo}
            >
              {showInfo ? 'Hide' : 'Show'} More Info
            </button>
            {showInfo && (
              <animated.div style={fadeIn} className="mt-4 p-4 bg-white rounded-lg shadow-lg">
                <h4 className="text-lg md:text-xl font-semibold text-primaryDark mb-2">Additional Information</h4>
                <p className="text-base md:text-lg text-primaryDark">We use only the best products and latest techniques to ensure you leave looking and feeling your best.</p>
                <p className="text-base md:text-lg text-primaryDark mt-2">Our team is committed to providing exceptional service and creating a welcoming environment.</p>
              </animated.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HaircutsStyling;
