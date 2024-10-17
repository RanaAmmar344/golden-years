import React, { useState } from 'react';

const images = [
  "image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg",
  "image6.jpg", "image7.jpg", "image8.jpg", "image9.jpg", "image10.jpg"
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesPerRow = 5;

  const handleNext = () => {
    if (currentIndex < images.length - imagesPerRow) {
      setCurrentIndex(currentIndex + imagesPerRow);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - imagesPerRow);
    }
  };

  return (
    <div className="relative max-w-4xl mx-auto overflow-hidden">
      <div className="flex flex-col space-y-4">
        {/* Top Row */}
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${(currentIndex / imagesPerRow) * 100}%)` }}>
          {images.slice(0, imagesPerRow).map((src, index) => (
            <img key={index} src={src} alt={`Image ${index + 1}`} className="w-1/5 p-2" />
          ))}
        </div>
        {/* Bottom Row */}
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${(currentIndex / imagesPerRow) * 100}%)` }}>
          {images.slice(imagesPerRow).map((src, index) => (
            <img key={index} src={src} alt={`Image ${index + imagesPerRow + 1}`} className="w-1/5 p-2" />
          ))}
        </div>
      </div>
      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute top-4 right-16 bg-black text-white px-3 py-2 rounded-full opacity-75 hover:opacity-100 transition-opacity"
        disabled={currentIndex === 0}
      >
        &#8249;
      </button>
      <button
        onClick={handleNext}
        className="absolute top-4 right-4 bg-black text-white px-3 py-2 rounded-full opacity-75 hover:opacity-100 transition-opacity"
        disabled={currentIndex >= images.length - imagesPerRow}
      >
        &#8250;
      </button>
    </div>
  );
};

export default Carousel;
