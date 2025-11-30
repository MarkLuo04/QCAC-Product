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
    <footer className="border-t" style={{ borderColor: 'var(--color-primary-light)', backgroundColor: 'var(--color-primary-bg)' }}>
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
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-transparent text-sm"
                onFocus={(e) => e.currentTarget.style.boxShadow = '0 0 0 2px var(--color-primary)'}
                onBlur={(e) => e.currentTarget.style.boxShadow = 'none'}
                required
              />
              <button
                type="submit"
                className="px-6 py-2 text-white rounded-lg transition-colors font-medium text-sm cursor-pointer"
                style={{ backgroundColor: 'var(--color-primary)' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-primary-hover)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--color-primary)'}
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-6 mb-4">
            <button
              className="text-gray-600 transition-colors cursor-pointer"
              style={{ color: 'var(--color-text-tertiary)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-tertiary)'}
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </button>
            <button
              className="text-gray-600 transition-colors cursor-pointer"
              style={{ color: 'var(--color-text-tertiary)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-tertiary)'}
              aria-label="Email"
            >
              <Mail size={24} />
            </button>
            <button
              className="text-gray-600 transition-colors cursor-pointer"
              style={{ color: 'var(--color-text-tertiary)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-tertiary)'}
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

