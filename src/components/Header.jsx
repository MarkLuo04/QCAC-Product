import React, { useState } from 'react';
import { Search, User, ShoppingCart, Menu, X } from 'lucide-react';
import linkoBanner from '../images/linkobanner.png';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b shadow-sm" style={{ backgroundColor: 'var(--color-header)', borderColor: 'var(--color-header-border)' }}>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-8 flex items-center justify-between h-20 sm:h-[100px]">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-white/90 hover:text-white hover:bg-white/20 rounded-lg transition-all cursor-pointer"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex gap-8">
          <a 
            href="#" 
            className="text-white/90 hover:text-white font-medium transition-all relative group"
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
          </a>
          <a 
            href="#" 
            className="text-white/90 hover:text-white font-medium transition-all relative group"
          >
            Catalog
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
          </a>
          <a 
            href="#" 
            className="text-white/90 hover:text-white font-medium transition-all relative group"
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
          </a>
        </div>

        {/* Banner Logo */}
        <img 
          src={linkoBanner} 
          alt="Linko Art" 
          className="absolute left-1/2 -translate-x-1/2 h-full max-w-[180px] sm:max-w-md transition-opacity hover:opacity-90" 
          style={{ objectFit: 'contain' }} 
        />

        {/* Icons */}
        <div className="flex gap-3 sm:gap-6 items-center">
          <button 
            className="p-2 text-white/90 hover:text-white hover:bg-white/20 rounded-lg transition-all cursor-pointer hidden sm:flex" 
            aria-label="Search"
          >
            <Search size={20} />
          </button>
          <button 
            className="p-2 text-white/90 hover:text-white hover:bg-white/20 rounded-lg transition-all cursor-pointer" 
            aria-label="Login"
          >
            <User size={20} />
          </button>
          <button 
            className="p-2 text-white/90 hover:text-white hover:bg-white/20 rounded-lg transition-all cursor-pointer" 
            aria-label="Shopping Cart"
          >
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t" style={{ borderColor: 'var(--color-header-border)', backgroundColor: 'var(--color-header)' }}>
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-4">
            <a 
              href="#" 
              className="text-white/90 hover:text-white font-medium transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#" 
              className="text-white/90 hover:text-white font-medium transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Catalog
            </a>
            <a 
              href="#" 
              className="text-white/90 hover:text-white font-medium transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
            <button 
              className="flex items-center gap-2 text-white/90 hover:text-white font-medium transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Search size={20} />
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
