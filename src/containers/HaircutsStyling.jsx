import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import emmaRoberts from '../assets/Hero.png'; // Replace with actual image
import personImage1 from '../assets/Hero.png'; // Replace with actual images

const HaircutsStyling = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);
  
  const handleScrollToAppointment = () => {
    if (appointmentRef.current) {
      appointmentRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <div className="py-6 px-4 md:px-8 lg:px-12 max-w-full mx-auto">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primaryDark mb-8 text-center" data-aos="fade-up">Haircuts & Styling</h1>
      
      <div className="flex flex-col md:flex-row items-center mb-8" data-aos="fade-up" data-aos-delay="300">
        <img src={emmaRoberts} alt="Emma Roberts" className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full shadow-lg mb-4 md:mb-0 md:mr-6" />
        <div className="text-center md:text-left">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-primaryDark mb-2">Person in Charge</h2>
          <p className="text-base md:text-lg text-primaryDark text-start">Emily Johnson, our expert stylist, provides personalized haircuts and styles tailored to your preferences.</p>
        </div>
      </div>
      
      <div className="mb-6" data-aos="fade-up" data-aos-delay="600">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-primaryDark mb-2">Available Days</h2>
        <p className="text-base md:text-lg text-primaryDark">We offer haircuts and styling services from Monday to Saturday, 9 AM - 6 PM.</p>
      </div>
      
      <div className="relative mb-8" data-aos="fade-up" data-aos-delay="900">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-primaryDark mb-4 text-center">Number of Appointments</h2>
        <p className="text-base md:text-lg text-primaryDark text-center mb-4">We have received over 2,000 appointments for haircuts and styling services this year.</p>
        <div className="relative flex justify-center py-6">
          <div className="absolute w-12 h-12 rounded-full border-4 border-white bg-gray-100 flex items-center justify-center overflow-hidden" style={{ left: '0', zIndex: 8 }}>
            <img src={personImage1} alt="Person 1" className="w-full h-full object-cover rounded-full" />
          </div>
          {/* Add more person images as needed */}
        </div>
      </div>
      
      <div className="text-center">
        <Link to="/gallery" className="text-primary font-semibold hover:underline text-lg md:text-xl">View Our Gallery</Link>
      </div>
    </div>
  );
}

export default HaircutsStyling;
