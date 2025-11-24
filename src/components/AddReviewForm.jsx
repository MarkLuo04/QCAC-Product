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
    <section>
      <h2></h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name"></label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="rating"></label>
          <select
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
          >
            <option value={5}>5</option>
            <option value={4}>4</option>
            <option value={3}>3</option>
            <option value={2}>2</option>
            <option value={1}>1</option>
          </select>
        </div>

        <div>
          <label htmlFor="message"></label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            required
          />
        </div>

        <button type="submit"></button>
      </form>
    </section>
  );
}
