import React, { useState } from 'react';

export default function ProductInfo({ product }) {
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="space-y-6">
      {/* Product name and price */}
      <div>
        <p className="text-sm mb-2" style={{ color: 'var(--color-primary)' }}>{product.brand}</p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          {product.name}
        </h1>
        <p className="text-2xl font-semibold" style={{ color: 'var(--color-primary)' }}>${product.price.toFixed(2)}</p>
      </div>

      {/* Product description */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-3">Description</h2>
        <p className="text-gray-700 leading-relaxed">
          {product.description}
        </p>
      </div>

      {/* Quantity selector */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">Quantity</label>
        <div className="flex items-center gap-3 w-32">
          <button
            onClick={decreaseQuantity}
            className="w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-lg cursor-pointer hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all"
          >
            −
          </button>
          <span className="flex-1 text-center font-medium text-lg">{quantity}</span>
          <button
            onClick={increaseQuantity}
            className="w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-lg cursor-pointer hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all"
          >
            +
          </button>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex gap-3 pt-2">
        <button 
          className="flex-1 text-white py-3 px-6 rounded-lg font-medium cursor-pointer bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] transition-colors"
        >
          Add to Cart
        </button>
        <button 
          className="flex-1 bg-white py-3 px-6 rounded-lg font-medium cursor-pointer border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary-bg)] transition-colors"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}
