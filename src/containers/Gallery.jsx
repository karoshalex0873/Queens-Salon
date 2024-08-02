import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaHeart } from 'react-icons/fa';
import galleryImage from '../assets/Hero.png'; // Placeholder

const images = [
  { src: galleryImage, alt: 'Gallery Image 1', id: 1 },
  { src: galleryImage, alt: 'Gallery Image 2', id: 2 },
  { src: galleryImage, alt: 'Gallery Image 3', id: 3 },
  { src: galleryImage, alt: 'Gallery Image 4', id: 4 },
  { src: galleryImage, alt: 'Gallery Image 5', id: 5 },
];

const Gallery = () => {
  const [recommendedImages, setRecommendedImages] = useState([]);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const response = await axios.post('/recommend', {
          interactions: [1, 0, 0, 1, 0], // Example interaction data
        });
        setRecommendedImages(response.data);
      } catch (error) {
        console.error('Error fetching recommendations:', error);
      }
    };

    fetchRecommendations();
  }, []);

  const handleLike = (id) => {
    // Handle user like interaction
    console.log('Liked image with id:', id);
  };

  return (
    <div className="py-6 px-4 md:px-8 lg:px-12 max-w-full mx-auto">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primaryDark mb-8 text-center">Gallery</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recommendedImages.map((imageId) => {
          const image = images.find(img => img.id === imageId);
          return (
            <div key={imageId} className="relative group overflow-hidden rounded-lg shadow-lg" data-aos="fade-up">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-48 object-cover"
              />
              <button
                onClick={() => handleLike(image.id)}
                className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
              >
                <FaHeart className="text-xl text-gray-400 hover:text-red-500" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
