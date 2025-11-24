import React from 'react';
import linkoBanner from '../images/linkobanner.png';

export default function Header() {
  return (
    <header className="sticky top-0 bg-gradient-to-r from-white to-teal-50 z-50">
      <img src={linkoBanner} alt="Linko Art" className="mx-auto max-w-xs w-full block" style={{ height: '100px', objectFit: 'contain' }} />
    </header>
  );
}
