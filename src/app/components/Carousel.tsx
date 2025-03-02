'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const images = [
  '/img/bg0.jpg',
  '/img/bg1.jpg',
  '/img/bg2.jpg',
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {images.map((img, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === current ? 1 : 0 }}
          transition={{ duration: 0.8 }}
          className={`absolute inset-0 w-full h-full ${index === current ? 'block' : 'hidden'}`}
        >
          <Image src={img} alt={`Slide ${index}`} layout="fill" objectFit="cover" />
        </motion.div>
      ))}

      <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
        ⬅
      </button>
      <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
        ➡
      </button>
    </div>
  );
}
