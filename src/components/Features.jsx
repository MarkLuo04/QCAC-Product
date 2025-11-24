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
    <section className="py-20 px-8 bg-white">
      <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">Features</h2>
      <ul className="max-w-2xl mx-auto space-y-3 text-gray-700">
        {features.map((feature, index) => (
          <li key={index} className="text-lg leading-relaxed">
            • {feature}
          </li>
        ))}
      </ul>
    </section>
  );
}
