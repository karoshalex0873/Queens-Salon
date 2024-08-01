import React, { useEffect } from 'react';
import AOS from 'aos';
import img from '../assets/alex.jpg'
import 'aos/dist/aos.css';

const owners = [
    {
      name: 'Alex Karobia',
      title: 'Owner & CEO',
      description: 'Founder and CEO of Queen Salon. Oversees all aspects of the salon and drives the vision and strategy.',
      image: 'path/to/ceo-image.jpg', // Replace with actual image path or URL
    },
    {
      name: 'Jordan Smith',
      title: 'Salon Director',
      description: 'Manages the day-to-day operations of the salon and ensures high standards of service.',
      image: 'path/to/director-image.jpg', // Replace with actual image path or URL
    },
    {
      name: 'Emily Johnson',
      title: 'Lead Stylist',
      description: 'Expert in hair styling and cutting-edge trends. Leads the stylist team and ensures quality service.',
      image: 'path/to/lead-stylist-image.jpg', // Replace with actual image path or URL
    },
    {
      name: 'Michael Brown',
      title: 'Color Specialist',
      description: 'Specializes in hair coloring techniques and custom color solutions to achieve clients’ desired looks.',
      image: 'path/to/color-specialist-image.jpg', // Replace with actual image path or URL
    },
    {
      name: 'Sarah Lee',
      title: 'Salon Manager',
      description: 'Handles scheduling, inventory management, and client consultations. Ensures smooth salon operations.',
      image: 'path/to/salon-manager-image.jpg', // Replace with actual image path or URL
    },
    {
      name: 'Jessica Green',
      title: 'Senior Stylist',
      description: 'Provides expert haircuts, styling, and treatments. Mentors junior stylists and ensures client satisfaction.',
      image: 'path/to/senior-stylist-image.jpg', // Replace with actual image path or URL
    },
    {
      name: 'David Wilson',
      title: 'Receptionist',
      description: 'Manages front desk operations, including appointments, client interactions, and administrative tasks.',
      image: 'path/to/receptionist-image.jpg', // Replace with actual image path or URL
    },
    {
      name: 'Olivia Martinez',
      title: 'Junior Stylist',
      description: 'Assists senior stylists and provides haircuts and treatments under supervision. Focuses on building skills and client rapport.',
      image: 'path/to/junior-stylist-image.jpg', // Replace with actual image path or URL
    },
  ];
  
  
const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
    });
  }, []);

  return (
    <>
      <span id="about"></span>
      <div className="w-full mx-auto flex flex-col justify-center text-primaryDark"> 
        
        <div className="w-full">
          {/* Overview of the company */}
          <div className="flex items-center justify-center px-4">
            <div className="flex flex-col space-y-5 text-2xl text-center mt-2 w-full max-w-[600px]">
                <h1
                data-aos="fade-right"
                className=" font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"
                >
                <span className="text-primary"><br />About Us</span>
                </h1>
                <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-start text-base sm:text-lg md:text-xl mb-6"
                >
                At Queen Salon, we specialize in transforming women into their most radiant selves.  Our expert team is dedicated to enhancing your natural beauty and providing a luxurious experience that leaves you feeling confident and rejuvenated.  Discover the perfect blend of elegance and sophistication at Queen Salon, where every visit is a step towards your most beautiful self.
                </p>
            </div>
         </div>

          
          {/* The owners and founders of the organization */}
           <div
           className="py-6 container">
            <h1 
            data-aos="fade-up"
              data-aos-delay="300"
            className="text-center font-serif text-3xl sm:text-4xl font-bold ">
                meet our team
            </h1>
            <div className="px-4 py-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {owners.map((owner, index) => (
                    <div
                        key={index}
                        data-aos="fade-up"
                        data-aos-delay="400"
                        className="flex flex-col items-center text-center shadow-lg p-5 border-gray-200 rounded-lg"
                    >
                        <img
                        src={owner.image}
                        alt={owner.name}
                        className="w-32 h-32 object-cover rounded-full mb-4"
                        />
                        <h3 className="text-2xl font-semibold ">{owner.name}</h3>
                        <p className="text-lg  text-primaryDark">{owner.title}</p>
                        <p className="mt-2 text-start text-primaryDark">{owner.description}</p>
                    </div>
                    ))}
                </div>
                </div>

           </div>
        </div>
      </div>
    </>
  );
}

export default About;
