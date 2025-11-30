import React from 'react';

export default function Features() {
  const features = [
    '16 oz glass cup with a glass straw and bamboo lid',
    'Pink elements change from pastel pink to fuschia in temperatures below 10°C',
    'Holds hot and cold drinks',
    'Designs made with permanent Cricut vinyl and heat-sealed for longevity',
    'Hand-wash only'
  ];

  return (
    <section className="max-w-6xl mx-auto px-8 py-12 border-t border-gray-200">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Product Details</h2>
      <ul className="space-y-3 text-gray-700">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="mr-3 text-primary">•</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
