import React, { useState } from 'react';

export default function AddReviewForm({ onAddReview }) {
  const [formData, setFormData] = useState({
    name: '',
    rating: 5,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'rating' ? parseInt(value) : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.message.trim()) {
      alert('Please fill in all fields');
      return;
    }

    onAddReview(formData);

    // Reset form
    setFormData({
      name: '',
      rating: 5,
      message: ''
    });
  };

  return (
    <section className="max-w-6xl mx-auto px-8 py-12 border-t border-gray-200">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Write a Review</h2>
      <form onSubmit={handleSubmit} className="max-w-2xl space-y-6">
        <div>
          <label htmlFor="name" className="block mb-2 text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-teal-600"
            required
          />
        </div>

        <div>
          <label htmlFor="rating" className="block mb-2 text-gray-700">Rating</label>
          <select
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-teal-600"
          >
            <option value={5}>5</option>
            <option value={4}>4</option>
            <option value={3}>3</option>
            <option value={2}>2</option>
            <option value={1}>1</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block mb-2 text-gray-700">Your Review</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className="w-full p-3 border border-gray-300 rounded resize-none focus:outline-none focus:border-teal-600"
            required
          />
        </div>

        <button 
          type="submit" 
          className="px-8 py-3 bg-teal-600 text-white rounded hover:bg-teal-700"
        >
          Submit Review
        </button>
      </form>
    </section>
  );
}
