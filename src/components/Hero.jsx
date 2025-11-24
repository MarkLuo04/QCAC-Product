import React from 'react';
import warmImage from '../images/glass_cup_warm.webp';
import coldImage from '../images/glass_cup_cold.webp';

export default function Hero() {
  return (
    <section className="py-20 px-8 text-center bg-gradient-to-b from-pink-50 to-white">
      <h1 className="text-4xl md:text-5xl font-bold mb-3 text-gray-900">Yae Miko Color-Changing Glass Cup</h1>
      <p className="text-lg text-gray-600 mb-12">Linko Art</p>
      
      <div className="flex gap-8 justify-center my-8 flex-wrap">
        <div className="bg-white p-6 rounded-lg">
          <img src={warmImage} alt="Glass cup warm" className="w-48 h-auto rounded" />
          <p className="mt-4 text-sm font-medium text-gray-700">Warm</p>
        </div>
        <div className="bg-white p-6 rounded-lg">
          <img src={coldImage} alt="Glass cup cold" className="w-48 h-auto rounded" />
          <p className="mt-4 text-sm font-medium text-gray-700">Cold</p>
        </div>
      </div>
      
      <p className="max-w-2xl mx-auto mt-12 text-lg leading-relaxed text-gray-700">
        Yae Miko inspired glass, featuring her kitsune form and cherry blossoms! 
        Pink elements change from pastel pink to fuschia in temperatures below 10°C.
      </p>
    </section>
  );
}
