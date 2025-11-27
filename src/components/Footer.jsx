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
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="max-w-6xl mx-auto px-8 py-10">
        <div className="flex flex-col items-center">
          {/* Mailing List Form */}
          <div className="w-full max-w-md mb-6">
            <h3 className="text-center text-sm font-medium text-gray-700 mb-3">
              Join the mailing list!
            </h3>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                required
              />
              <button
                type="submit"
                className="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-medium text-sm cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-6 mb-4">
            <button
              className="text-gray-600 hover:text-teal-600 transition-colors cursor-pointer"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </button>
            <button
              className="text-gray-600 hover:text-teal-600 transition-colors cursor-pointer"
              aria-label="Email"
            >
              <Mail size={24} />
            </button>
            <button
              className="text-gray-600 hover:text-teal-600 transition-colors cursor-pointer"
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

