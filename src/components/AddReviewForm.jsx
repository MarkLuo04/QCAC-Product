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
    <section className="py-20 px-8 bg-white">
      <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">Write a Review</h2>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
        <div>
          <label htmlFor="name" className="block mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 bg-gray-50 rounded"
            required
          />
        </div>

        <div>
          <label htmlFor="rating" className="block mb-2">Rating</label>
          <select
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            className="w-full p-3 bg-gray-50 rounded"
          >
            <option value={5}>5</option>
            <option value={4}>4</option>
            <option value={3}>3</option>
            <option value={2}>2</option>
            <option value={1}>1</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block mb-2">Your Review</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className="w-full p-3 bg-gray-50 rounded resize-none"
            required
          />
        </div>

        <button 
          type="submit" 
          className="w-full p-3 bg-pink-600 text-white rounded"
        >
          Submit Review
        </button>
      </form>
    </section>
  );
}
