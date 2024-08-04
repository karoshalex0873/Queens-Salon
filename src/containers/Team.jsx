import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img from '../assets/alex.jpg';

const owners = [
  {
    name: 'Alex Karobia',
    title: 'Owner & CEO',
    description: 'Founder and CEO of Queen Salon. Oversees all aspects of the salon and drives the vision and strategy.',
    image: img,
  },
  {
    name: 'Jordan Smith',
    title: 'Salon Director',
    description: 'Manages the day-to-day operations of the salon and ensures high standards of service.',
    image: 'path/to/director-image.jpg',
  },
  {
    name: 'Emily Johnson',
    title: 'Lead Stylist',
    description: 'Expert in hair styling and cutting-edge trends. Leads the stylist team and ensures quality service.',
    image: 'path/to/lead-stylist-image.jpg',
  },
  {
    name: 'Michael Brown',
    title: 'Color Specialist',
    description: 'Specializes in hair coloring techniques and custom color solutions to achieve clients’ desired looks.',
    image: 'path/to/color-specialist-image.jpg',
  },
  {
    name: 'Sarah Lee',
    title: 'Salon Manager',
    description: 'Handles scheduling, inventory management, and client consultations. Ensures smooth salon operations.',
    image: 'path/to/salon-manager-image.jpg',
  },
  {
    name: 'Jessica Green',
    title: 'Senior Stylist',
    description: 'Provides expert haircuts, styling, and treatments. Mentors junior stylists and ensures client satisfaction.',
    image: 'path/to/senior-stylist-image.jpg',
  },
  {
    name: 'David Wilson',
    title: 'Receptionist',
    description: 'Manages front desk operations, including appointments, client interactions, and administrative tasks.',
    image: 'path/to/receptionist-image.jpg',
  },
  {
    name: 'Olivia Martinez',
    title: 'Junior Stylist',
    description: 'Assists senior stylists and provides haircuts and treatments under supervision. Focuses on building skills and client rapport.',
    image: 'path/to/junior-stylist-image.jpg',
  },
];

const Team = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
    });
  }, []);

  return (
    <div className='team text-gray-300 px-10'>
      <div  className="py-6 container">
        <h1
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-center font-serif text-3xl sm:text-4xl font-bold"
        >
          Meet Our Team
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
                <h3 className="text-2xl  text-primary font-semibold">{owner.name}</h3>
                <p className="text-lg text-primaryDark">{owner.title}</p>
                <p className="mt-2 text-start text-primaryDark">{owner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
