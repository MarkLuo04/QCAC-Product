import React, { useState } from 'react';
import { Instagram, Mail, Youtube } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      console.log('Subscribed:', email);
      setEmail('');
      alert('Thanks for subscribing!');
    }
  };

  return (
    <footer className="border-t border-primary-light bg-primary-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
        <div className="flex flex-col items-center">
          {/* Mailing List Form */}
          <div className="w-full max-w-md mb-4 sm:mb-6">
            <h3 className="text-center text-sm font-medium text-gray-700 mb-3">
              Join the mailing list!
            </h3>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm transition-shadow"
                required
              />
              <button
                type="submit"
                className="px-6 py-2 text-white rounded-lg font-medium text-sm cursor-pointer bg-primary hover:bg-primary-hover transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-6 mb-4">
            <button
              className="text-text-tertiary hover:text-primary transition-colors cursor-pointer"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </button>
            <button
              className="text-text-tertiary hover:text-primary transition-colors cursor-pointer"
              aria-label="Email"
            >
              <Mail size={24} />
            </button>
            <button
              className="text-text-tertiary hover:text-primary transition-colors cursor-pointer"
              aria-label="YouTube"
            >
              <Youtube size={24} />
            </button>
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Linko.
          </p>
        </div>
      </div>
    </footer>
  );
}

