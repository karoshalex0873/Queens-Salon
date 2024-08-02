import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';
import { RiArrowRightLine } from 'react-icons/ri';

const About = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
    });
  }, []);

  const handleNavigate = () => {
    navigate('/team');
  };

  return (
    <>
      <span id="about"></span>
      <div className="w-full mx-auto flex flex-col justify-center text-primaryDark">
        <div className="w-full">
          <div className="flex items-center justify-center px-4">
            <div className="flex flex-col space-y-5 text-2xl text-center mt-2 w-full max-w-[600px]">
              <h1
                data-aos="fade-right"
                className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"
              >
                <span className="text-primary"><br />About Us</span>
              </h1>
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-start text-base sm:text-lg md:text-xl mb-6"
              >
                At Queen Salon, we specialize in transforming women into their most radiant selves. Our expert team is dedicated to enhancing your natural beauty and providing a luxurious experience that leaves you feeling confident and rejuvenated. Discover the perfect blend of elegance and sophistication at Queen Salon, where every visit is a step towards your most beautiful self.
              </p>
            </div>
          </div>
          <div className="py-6 flex justify-center items-center">
            <button
              onClick={handleNavigate}
              className="flex items-center text-primary font-semibold hover:underline"
              data-aos="fade-up"
            >
              <span className="mr-2">Meet The Team</span>
              <RiArrowRightLine size={20} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
