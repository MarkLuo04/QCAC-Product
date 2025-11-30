import React from 'react';
import hanfuLinko from '../images/hanfu_linko.webp';
import shinobu from '../images/shinobu.webp';
import sodaPop from '../images/soda_pop.webp';
import spyFamily from '../images/spy_family.webp';
import klee from '../images/klee.webp';
import rujinu from '../images/rujinu.webp';

// Related products
const relatedProducts = [
  {
    id: 1,
    name: "Hanfu Linko Art Print",
    price: 10.00,
    image: hanfuLinko
  },
  {
    id: 2,
    name: "Shinobu Kochou (Demon Slayer) Print",
    price: 10.00,
    image: shinobu
  },
  {
    id: 3,
    name: "Saja Boys Soda Pop (KPop Demon Hunters) Holographic Vinyl Sticker",
    price: 3.50,
    image: sodaPop
  },
  {
    id: 4,
    name: "Spy x Family Print",
    price: 10.00,
    image: spyFamily
  },
  {
    id: 5,
    name: "Klee (Genshin Impact) Matte Vinyl Sticker",
    price: 3.50,
    image: klee
  },
  {
    id: 6,
    name: "Rujinu (KPop Demon Hunters) Matte Vinyl Sticker",
    price: 3.50,
    image: rujinu
  }
];

export default function RelatedProducts() {

  return (
    <section className="max-w-6xl mx-auto px-8 py-12">
      <h2 className="text-2xl font-bold mb-8 text-gray-900 text-center">You May Also Like</h2>
      
      {/* Horizontal Carousel */}
      <div className="overflow-x-auto">
        <div className="flex gap-6 pb-4 min-w-max">
          {relatedProducts.map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer flex-shrink-0 w-64"
            >
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-3 border border-gray-200">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 
                className="font-medium text-gray-900 text-sm mb-1 transition-colors hover:text-[var(--color-primary)]"
              >
                {product.name}
              </h3>
              <p className="font-semibold" style={{ color: 'var(--color-primary)' }}>
                ${product.price.toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

