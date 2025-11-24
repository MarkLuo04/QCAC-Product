import React from 'react';

export default function Features() {
  const features = [
    {
      icon: '',
      title: '',
      description: ''
    },
  ];

  return (
    <section>
      <h2></h2>
      <div>
        {features.map((feature, index) => (
          <div key={index}>
            <div>{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
