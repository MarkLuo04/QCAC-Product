import React from 'react';

export default function ProductInfo({ product }) {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm text-teal-600 mb-2">{product.brand}</p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {product.name}
        </h1>
        <p className="text-2xl font-semibold text-teal-600">${product.price.toFixed(2)}</p>
      </div>

      <div className="pt-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-3">Description</h2>
        <p className="text-gray-700 leading-relaxed">
          {product.description}
        </p>
      </div>

      <button className="w-full bg-teal-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-teal-700">
        Add to Cart
      </button>
    </div>
  );
}
