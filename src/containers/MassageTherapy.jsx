import React, { useEffect } from 'react'
import therapist from '../assets/Hero.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaStar } from 'react-icons/fa';
const MassageTherapy = () => {
    useEffect(() => {
            AOS.init({
              duration: 1000,
              easing: 'ease-in-out',
              once: true,
            });
          }, []);

//  const [slider, setSlider] = useState(false)
   
  return (
    <div className="py-6 px-4 md:px-8 lg:px-12 w-full mx-auto container bg-gray-300 rounded-3xl">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primaryDark mb-8 text-center" data-aos="fade-up">Massage Therapy</h1>
        <div className="relative  block lg:flex  justify-center py-6 gap-6 space-y-10">
           <div className="flex-col max-w-md w-full text-secondary justify-center" data-aos="fade-left"> 
           <h1 className="text-2xl  md:text-3xl lg:text-4xl font-normal font-serif text-secondary mb-8 text-center" data-aos="fade-right">Therapist </h1>
            <img
            data-aos="zoom-out fade-up"
            data-aos-delay="600"
            className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full shadow-lg mb-4 md:mb-0 md:mr-6 bg-primaryDark"
            src={therapist} alt="" />
            <h1
            data-aos="zoom-out fade-up"
             data-aos-delay="800"
             className="text-2xl font-serif"
            >David King,</h1>
            <p className="text-base md:text-lg text-primaryDark text-start">Our massage therapist, provides relaxing and therapeutic services.</p>
            </div>
            <div>
                <div>

                <div className="mb-6 font-serif" data-aos="fade-up" data-aos-delay="600">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-primaryDark mb-2">Available Days</h2>
                    <p className="text-base md:text-lg text-primaryDark">We offer Massage Therapy services services from Monday to Saturday, 9 AM - 6 PM.</p>
                </div>
                </div>
                <div className=" gap-8 max-w-fit py-4 overflow-hidden rounded-2xl bg-primaryDark flex border-2 border-white ">
                    <img
                    className="w-full h-auto" src={therapist} alt="" />
                </div>
                <div className="flex  flex-col px-3 py-3 space-y-3 ">
                    <h1 className="font-light italic font text-3xl font-serif ring-secondary">You are all welcome</h1>
                    <div className="flex-col ">
                    <h1 className="font-serif text-xl font-normal text-primaryDark">4.0 rating </h1>
                    <div className="flex text-orange-300 font-serif">
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar className="text-primaryDark" /> </div>
                    </div>
                  <button
                        className="bg-gradient-to-r w-fit flex justify-center items-center absolute right-0 bottom-0 from-primaryDark to-primary border-2 border-white rounded-t-full rounded-bl-full px-6 py-3 font-semibold text-white hover:scale-105 transition duration-200"
                    >
                        Book an <br /> Appointment
                    </button>
                </div>
            </div>
        </div>
        
      
    </div>
  )
}

export default MassageTherapy



// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { Link } from 'react-router-dom';
// import back4 from '../assets/Hero.png'; // Replace with actual image

// const MassageTherapy = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       easing: 'ease-in-out',
//       once: true,
//     });
//   }, []);

//   return (
//     <div className="py-6 px-4 md:px-8 lg:px-12 max-w-full mx-auto">
//       <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primaryDark mb-8 text-center" data-aos="fade-up">Massage Therapy</h1>
      
//       <div className="flex flex-col md:flex-row items-center mb-8" data-aos="fade-up" data-aos-delay="300">
//         <img src={back4} alt="Massage Therapy" className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full shadow-lg mb-4 md:mb-0 md:mr-6" />
//         <div className="text-center md:text-left">
//           <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-primaryDark mb-2">Provider</h2>
//           <p className="text-base md:text-lg text-primaryDark text-start">David King, our massage therapist, provides relaxing and therapeutic services.</p>
//         </div>
//       </div>
      
//       <div className="mb-6" data-aos="fade-up" data-aos-delay="600">
//         <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-primaryDark mb-2">Description</h2>
//         <p className="text-base md:text-lg text-primaryDark">Relaxing and therapeutic massage services for your well-being.</p>
//       </div>
      
//       <div className="text-center">
//         <Link to="/services/massage-therapy" className="text-primary font-semibold hover:underline text-lg md:text-xl">Learn More</Link>
//       </div>
//     </div>
//   );
// }

// export default MassageTherapy;
