import React, { useEffect, useRef } from 'react';
import HeroImg from '../assets/Hero.png';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaGithub, FaTwitter } from "react-icons/fa";
import Navbar from './Navbar';
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

const Hero = () => {
  const appointmentRef = useRef(null); // Create a ref for the Appointment section

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
    });
  }, []);

  const handleScrollToAppointment = () => {
    if (appointmentRef.current) {
      appointmentRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='min-h-screen bg-primaryDark flex flex-col justify-center items-center text-white relative overflow-hidden rounded-3xl'>
      {/* include the navbar here */}
      <div className="w-full z-50 fixed top-0">
        <Navbar />
      </div>

      {/* icons for connection also and see the post */}
      <div 
        data-aos="fade-up"
        data-aos-delay="300"
        className="fixed right-0 top-0 w-[40px] lg:w-[80px] h-full flex flex-col justify-center items-center gap-4 p-2 z-20 transition-transform duration-300 ease-in-out transform hover:translate-x-0 animate-fade-in">
        <a
          href="https://github.com/karoshalex0873"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block p-2 rounded-full cursor-pointer border border-white hover:bg-white hover:text-primary transition-colors duration-300"
        >
          <FaGithub className="text-xl text-secondary" />
        </a>
        <a
          href="https://x.com/kalecalex0873"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block p-2 rounded-full cursor-pointer border border-white hover:bg-white hover:text-primary transition-colors duration-300"
        >
          <FaTwitter className="text-xl text-secondary" />
        </a>
        <a
          href="https://www.linkedin.com/in/alex-karobia-510a17264"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block p-2 rounded-full cursor-pointer border border-white hover:bg-white hover:text-primary transition-colors duration-300"
        >
          <FaLinkedinIn className="text-xl text-secondary" />
        </a>
      </div>

      <div className="container lg:px-6 px-10 py-12 mx-auto relative mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Text content section */}
          <div className="text-start lg:text-start lg:px-10 md:text-left">
            <h1
              data-aos="fade-right"
              className="text-5xl sm:text-6xl lg:text-7xl font-bold "
            >
              The Queens <span className="text-primary"> <br />Salon</span>
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-lg sm:text-xl mb-6"
            >
              Your self-care Our major concern <br /> Let's connect and Make you Stunning
            </p>
            <div
              data-aos="fade-up"
              data-aos-delay="600"
              className="flex justify-center md:justify-start text-center"
            >
              <button
                onClick={handleScrollToAppointment} // Handle click event
                className="bg-gradient-to-r from-primaryDark to-primary border-2 border-white rounded-t-full rounded-bl-full px-6 py-3 font-semibold text-white hover:scale-105 transition duration-200"
              >
                Book an <br /> Appointment
              </button>
            </div>
          </div>
          {/* Image content section */}
          <div className="flex justify-center items-center relative">
            <img
              src={HeroImg}
              alt="Beauty"
              data-aos="zoom-out fade-up"
              data-aos-delay="600"
              className="min-w-[300px] lg:w-[600px] h-auto rounded-3xl shadow-lg transform transition-transform duration-500 hover:scale-105 py-10 bg-transparent"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
