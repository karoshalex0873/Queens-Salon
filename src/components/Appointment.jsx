import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import appointmentImage from '../assets/Hero.png'; // Replace with your image path

const Appointment = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [countdown, setCountdown] = useState(5); // Countdown in seconds
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: ''
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  useEffect(() => {
    let timer;
    if (showPopup && countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    } else if (countdown === 0) {
      setShowPopup(false);
      setCountdown(5); // Reset countdown for next time
    }
    return () => clearInterval(timer);
  }, [showPopup, countdown]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setShowPopup(true);

    try {
      await fetch('http://localhost:5000/send-sms', { // Update with your backend URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phoneNumber: formData.phone,
          message: `Hello ${formData.name}, your appointment is scheduled for ${formData.date} at ${formData.time}.`
        }),
      });
    } catch (error) {
      console.error('Error sending SMS:', error);
    }
  };

  return (
    <>
      <span id='appointment'></span>
      <div className="py-6 px-4 md:px-8 lg:px-12 max-w-full mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primaryDark mb-8 text-center" data-aos="fade-up">
          Appointment Page
        </h1>
        <div className="lg:flex lg:flex-row lg:items-start flex-col">
          <div className="lg:w-1/2 flex flex-col items-center" data-aos="fade-up" data-aos-delay="300">
            <img src={appointmentImage} alt="Appointment" className="mx-auto mb-4 w-full max-w-md" />
            <p className="text-base md:text-lg text-primaryDark max-w-md text-center">
              Welcome to the appointment page. Here, you can book, view, and manage your appointments. Our easy-to-use system ensures you get the best service at your convenience.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0 w-full" data-aos="fade-up" data-aos-delay="600">
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-xl font-semibold text-primaryDark mb-4">Schedule Your Appointment</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4" data-aos="fade-up" data-aos-delay="300">
                  <label htmlFor="name" className="block text-base font-medium text-primaryDark">Name</label>
                  <input type="text" id="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg" required />
                </div>
                <div className="mb-4" data-aos="fade-up" data-aos-delay="400">
                  <label htmlFor="phone" className="block text-base font-medium text-primaryDark">Phone Number</label>
                  <input type="tel" id="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg" required />
                </div>
                <div className="mb-4" data-aos="fade-up" data-aos-delay="500">
                  <label htmlFor="date" className="block text-base font-medium text-primaryDark">Preferred Date</label>
                  <input type="date" id="date" value={formData.date} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg" required />
                </div>
                <div className="mb-4" data-aos="fade-up" data-aos-delay="600">
                  <label htmlFor="time" className="block text-base font-medium text-primaryDark">Preferred Time</label>
                  <input type="time" id="time" value={formData.time} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg" required />
                </div>
                <button type="submit" className="w-full bg-primary text-white py-2 px-4 rounded-lg">Book Appointment</button>
              </form>
            </div>
          </div>
        </div>
        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
              <p className="text-lg font-semibold text-primaryDark mb-4">
                Please wait. Your appointment will be scheduled shortly.
              </p>
              <div className="text-xl font-bold text-primaryDark">
                {countdown} seconds remaining
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Appointment;
