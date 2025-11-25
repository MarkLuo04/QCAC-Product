import React from 'react';
import { Search, User, ShoppingCart } from 'lucide-react';
import linkoBanner from '../images/linkobanner.png';

export default function Header() {
  return (
    <header className="sticky top-0 bg-gradient-to-r from-white to-teal-50 z-50 border-b border-gray-200">
      <div className="relative max-w-6xl mx-auto px-8 flex items-center justify-between" style={{ height: '100px' }}>
        {/* Nav Links */}
        <div className="flex gap-8">
          <a href="#" className="text-gray-700 hover:text-teal-600 font-medium">Home</a>
          <a href="#" className="text-gray-700 hover:text-teal-600 font-medium">Catalog</a>
          <a href="#" className="text-gray-700 hover:text-teal-600 font-medium">Contact</a>
        </div>

        {/* Banner Logo */}
        <img src={linkoBanner} alt="Linko Art" className="absolute left-1/2 -translate-x-1/2 h-full max-w-md" style={{ objectFit: 'contain' }} />

        {/* Icons */}
        <div className="flex gap-6 items-center">
          <button className="text-gray-700 hover:text-teal-600 cursor-pointer" aria-label="Search">
            <Search size={20} />
          </button>
          <button className="text-gray-700 hover:text-teal-600 cursor-pointer" aria-label="Login">
            <User size={20} />
          </button>
          <button className="text-gray-700 hover:text-teal-600 cursor-pointer" aria-label="Shopping Cart">
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}
