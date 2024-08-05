import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { RiArrowRightLine, RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import back1 from '../assets/assets/treatments/img.jpg';
import back2 from '../assets/Hero.png';
import back3 from '../assets/Hero.png';
import back4 from '../assets/assets/about/img.jpg';


const services = [
  {
    name: 'Haircuts & Styling',
    description: 'Expert haircuts and styling services tailored to your preferences.',
    provider: 'Emily Johnson',
    image: back2,
    link: '#haircuts',
  },
  {
    name: 'Hair Coloring',
    description: 'Custom color solutions and advanced coloring techniques.',
    provider: 'Michael Brown',
    image: back3,
    link: '#haircolor',
  },
   {
    name: 'Skincare Treatments',
    description: 'Personalized skincare treatments for glowing, healthy skin.',
    provider: 'Amanda Clark',
    image: back1,
    link: '#skincaretretments',
  },
  // {
  //   name: 'Manicures & Pedicures',
  //   description: 'Luxurious manicure and pedicure services for beautiful hands and feet.',
  //   provider: 'Jessica White',
  //   image: back4,
  //   link: '/services/manicures-pedicures',
  // },
  {
    name: 'Massage Therapy',
    description: 'Relaxing and therapeutic massage services for your well-being.',
    provider: 'David King',
    image: back4,
    link: '#therapy',
  },
  // {
  //   name: 'Facial Treatments',
  //   description: 'Rejuvenating facial treatments for a refreshed and youthful appearance.',
  //   provider: 'Sophia Martin',
  //   image: back4,
  //   link: '/services/facial-treatments',
  // },
];


const backgroundImages = [back1, back2, back3];

const Services = ({ scrollToHaircolor,  scrollToSkintretment, scrollToHaircut, scrollToMassage}) => {
  const [bgImage, setBgImage] = useState(backgroundImages[0]);
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const intervalId = setInterval(() => changeBackgroundImage(1), 60000);
    return () => clearInterval(intervalId);
  }, []);

  const changeBackgroundImage = (direction) => {
    setAnimationClass('slide-out');
    setTimeout(() => {
      setBgImage((prevImage) => {
        const currentIndex = backgroundImages.indexOf(prevImage);
        const nextIndex = (currentIndex + direction + backgroundImages.length) % backgroundImages.length;
        return backgroundImages[nextIndex];
      });
      setAnimationClass('slide-in');
    }, 500);
  };

    const handleServiceClick = (link) => {  
      if (link === '#haircolor') {
        scrollToHaircolor();
      } else if (link === '#skincaretretments') {
        scrollToSkintretment();
      } 
      else if (link === "#haircuts"){
        scrollToHaircut();
      }
      else if(link === "#therapy"){
        scrollToMassage();
      }
      else {
        window.location.href = link;
      }
    };
    
  

  return (
    <div id='service' className="relative px-4 py-10 overflow-hidden min-h-screen">
      <div
        className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ${animationClass}`}
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div
          className="absolute inset-0 bg-gradient-to-br from-black via-transparent to-black"
          style={{
            background: 'linear-gradient(to bottom right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 1))',
          }}
        ></div>
      </div>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 text-white relative z-10" data-aos="fade-up">
        Explore Our Major Services
      </h1>
      <div className="relative z-10 flex justify-between items-center">
        <button
          onClick={() => changeBackgroundImage(-1)}
          className="bg-primary text-white p-2 rounded-full"
          data-aos="fade-left"
        >
          <RiArrowLeftSLine size={30} />
        </button>
        <button
          onClick={() => changeBackgroundImage(1)}
          className="bg-primary text-white p-2 rounded-full"
          data-aos="fade-right"
        >
          <RiArrowRightSLine size={30} />
        </button>
      </div>
      <div className="relative z-10">
        <div className="py-10 flex justify-center items-center">
          <button
            href="" // Adjust the path as needed
            className="bg-gradient-to-r from-primaryDark to-primary border-2 border-white rounded-t-full rounded-bl-full px-6 py-3 font-semibold text-white hover:scale-105 transition duration-200 z-50"
          >
            Book an <br /> Appointment
          </button>
        </div>
        <h1 className="font-serif font-bold text-2xl items-center justify-center flex text-white">You are all welcome</h1>
        <div className="flex flex-col gap-8 md:gap-12 lg:flex-row lg:flex-wrap lg:justify-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center justify-between bg-white bg-opacity-80 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full md:w-5/12 lg:w-1/3 xl:w-1/4"
              data-aos="fade-up"
              data-aos-delay={`${index * 300}`}
              onClick={() => handleServiceClick(service.link)}
            >
              <div className="w-full md:w-1/2">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-40 md:h-48 object-cover rounded-lg"
                  data-aos="zoom-in"
                />
              </div>
              <div className="w-full md:w-1/2 mt-4 md:mt-0 md:ml-6">
                <h3 className="text-xl md:text-2xl font-semibold mb-2 text-primary" data-aos="fade-up">
                  {service.name}
                </h3>
                <p className="text-base md:text-lg mb-4 text-primaryDark" data-aos="fade-up">
                  {service.description}
                </p>
                <p className="text-sm md:text-md text-primaryDark mb-4" data-aos="fade-up">
                  Provided by: {service.provider}
                </p>
                <a
                  className="flex items-center text-primary font-semibold hover:underline cursor-pointer"
                  data-aos="fade-up"
                >
                  <span className="mr-2">Learn More</span>
                  <RiArrowRightLine size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
