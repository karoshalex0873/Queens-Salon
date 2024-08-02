import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import hairColorSample1 from '../assets/Hero.png'; // Replace with actual images
import hairColorSample2 from '../assets/Hero.png'; // Replace with actual images
import hairColorSample3 from '../assets/Hero.png'; // Replace with actual images
import hairColorSample4 from '../assets/Hero.png'; // Replace with actual images
import hairColorSample5 from '../assets/Hero.png'; // Replace with actual images
import emmaRoberts from '../assets/Hero.png'; // Replace with actual image
import personImage1 from '../assets/Hero.png'; // Replace with actual images
import personImage2 from '../assets/Hero.png'; // Replace with actual images
import personImage3 from '../assets/Hero.png'; // Replace with actual images
import personImage4 from '../assets/Hero.png'; // Replace with actual images
import personImage5 from '../assets/Hero.png'; // Replace with actual images
import personImage6 from '../assets/Hero.png'; // Replace with actual images
import personImage7 from '../assets/Hero.png'; // Replace with actual images
import personImage8 from '../assets/Hero.png'; // Replace with actual images

const Haircolor = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div className="py-6 px-4 md:px-8 lg:px-12 max-w-full mx-auto">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primaryDark mb-8 text-center" data-aos="fade-up">Hair Coloring Services</h1>
      
      <div className="flex flex-col md:flex-row items-center mb-8" data-aos="fade-up" data-aos-delay="300">
        <img src={emmaRoberts} alt="Emma Roberts" className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full shadow-lg mb-4 md:mb-0 md:mr-6" />
        <div className="text-center md:text-left">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-primaryDark mb-2">Person in Charge</h2>
          <p className="text-base md:text-lg text-primaryDark text-start">Emma Roberts, our expert hair colorist, specializes in the latest trends and techniques to ensure you get the perfect look.</p>
        </div>
      </div>
      
      <div className="mb-6" data-aos="fade-up" data-aos-delay="600">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-primaryDark mb-2">Available Days</h2>
        <p className="text-base md:text-lg text-primaryDark">We offer hair coloring services from Monday to Saturday, 9 AM - 6 PM.</p>
      </div>
      
      <div className="relative mb-8" data-aos="fade-up" data-aos-delay="900">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-primaryDark mb-4 text-center">Number of Appointments</h2>
        <p className="text-base md:text-lg text-primaryDark text-center mb-4">We have received over 1,200 appointments for hair coloring services this year.</p>
        <div className="relative flex justify-center py-6">
            <div className="absolute w-12 h-12 rounded-full border-4 border-white bg-gray-100 flex items-center justify-center overflow-hidden" style={{ left: '0', zIndex: 8 }}>
            <img src={personImage1} alt="Person 1" className="w-full h-full object-cover rounded-full" />
            </div>
            <div className="absolute w-12 h-12 rounded-full border-4 border-white bg-gray-100 flex items-center justify-center overflow-hidden" style={{ left: '20px', zIndex: 7 }}>
            <img src={personImage2} alt="Person 2" className="w-full h-full object-cover rounded-full" />
            </div>
            <div className="absolute w-12 h-12 rounded-full border-4 border-white bg-gray-100 flex items-center justify-center overflow-hidden" style={{ left: '40px', zIndex: 6 }}>
            <img src={personImage3} alt="Person 3" className="w-full h-full object-cover rounded-full" />
            </div>
            <div className="absolute w-12 h-12 rounded-full border-4 border-white bg-gray-100 flex items-center justify-center overflow-hidden" style={{ left: '60px', zIndex: 5 }}>
            <img src={personImage4} alt="Person 4" className="w-full h-full object-cover rounded-full" />
            </div>
            <div className="absolute w-12 h-12 rounded-full border-4 border-white bg-gray-100 flex items-center justify-center overflow-hidden" style={{ left: '80px', zIndex: 4 }}>
            <img src={personImage5} alt="Person 5" className="w-full h-full object-cover rounded-full" />
            </div>
            <div className="absolute w-12 h-12 rounded-full border-4 border-white bg-gray-100 flex items-center justify-center overflow-hidden" style={{ left: '100px', zIndex: 3 }}>
            <img src={personImage6} alt="Person 6" className="w-full h-full object-cover rounded-full" />
            </div>
            <div className="absolute w-12 h-12 rounded-full border-4 border-white bg-gray-100 flex items-center justify-center overflow-hidden" style={{ left: '120px', zIndex: 2 }}>
            <img src={personImage7} alt="Person 7" className="w-full h-full object-cover rounded-full" />
            </div>
            <div className="absolute w-12 h-12 rounded-full border-4 border-white bg-gray-100 flex items-center justify-center overflow-hidden" style={{ left: '140px', zIndex: 1 }}>
            <img src={personImage8} alt="Person 8" className="w-full h-full object-cover rounded-full" />
            </div>
        </div>
        </div>

      
      <div className="mb-8" data-aos="fade-up" data-aos-delay="1200">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-primaryDark mb-4">Types of Hair Coloring</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="flex flex-col items-center text-center p-4 border border-gray-200 rounded-lg shadow-lg">
            <img src={hairColorSample1} alt="Balayage" className="w-full h-40 md:h-48 object-cover rounded-t-lg mb-4" />
            <h3 className="text-lg md:text-xl font-semibold mb-2">Balayage</h3>
            <p className="text-base text-primaryDark">A technique for hand-painting highlights that create a natural, sun-kissed look.</p>
          </div>
          <div className="flex flex-col items-center text-center p-4 border border-gray-200 rounded-lg shadow-lg">
            <img src={hairColorSample2} alt="Ombré" className="w-full h-40 md:h-48 object-cover rounded-t-lg mb-4" />
            <h3 className="text-lg md:text-xl font-semibold mb-2">Ombré</h3>
            <p className="text-base text-primaryDark">A gradual color transition from dark to light for a soft and blended look.</p>
          </div>
          <div className="flex flex-col items-center text-center p-4 border border-gray-200 rounded-lg shadow-lg">
            <img src={hairColorSample3} alt="Highlights" className="w-full h-40 md:h-48 object-cover rounded-t-lg mb-4" />
            <h3 className="text-lg md:text-xl font-semibold mb-2">Highlights</h3>
            <p className="text-base text-primaryDark">Adding lighter shades to sections of your hair for a brightened effect.</p>
          </div>
          <div className="flex flex-col items-center text-center p-4 border border-gray-200 rounded-lg shadow-lg">
            <img src={hairColorSample4} alt="Root Touch-up" className="w-full h-40 md:h-48 object-cover rounded-t-lg mb-4" />
            <h3 className="text-lg md:text-xl font-semibold mb-2">Root Touch-up</h3>
            <p className="text-base text-primaryDark">Refreshing the color of your roots to match the rest of your hair.</p>
          </div>
          <div className="flex flex-col items-center text-center p-4 border border-gray-200 rounded-lg shadow-lg">
            <img src={hairColorSample5} alt="Color Correction" className="w-full h-40 md:h-48 object-cover rounded-t-lg mb-4" />
            <h3 className="text-lg md:text-xl font-semibold mb-2">Color Correction</h3>
            <p className="text-base text-primaryDark">Adjusting the color to fix unwanted tones and achieve your desired shade.</p>
          </div>
        </div>
      </div>
      
      <div className="text-center">
        <Link to="/gallery" className="text-primary font-semibold hover:underline text-lg md:text-xl">View Our Gallery</Link>
      </div>
    </div>
  );
}

export default Haircolor;
