import React, { useState } from 'react';
import { X, Upload } from 'lucide-react';
import { IMAGE_UPLOAD, RATING, MESSAGES } from '../utils/constants.js';

// Form component for adding new product reviews
export default function AddReviewForm({ onAddReview, onCancel }) {
  // Form state management
  const [formData, setFormData] = useState({
    name: '',
    rating: RATING.DEFAULT,
    message: '',
    images: []
  });
  const [hoverRating, setHoverRating] = useState(0);

  // Form input handlers
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'rating' ? parseInt(value) : value
    }));
  };

  // Star rating interaction handler
  const handleStarClick = (rating) => {
    setFormData(prev => ({
      ...prev,
      rating: rating
    }));
  };

  // Image upload and validation handler
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    
    if (formData.images.length + files.length > IMAGE_UPLOAD.MAX_COUNT) {
      alert(MESSAGES.IMAGE_LIMIT);
      return;
    }

    files.forEach(file => {
      if (file.size > IMAGE_UPLOAD.MAX_SIZE_BYTES) {
        alert(MESSAGES.IMAGE_SIZE);
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({
          ...prev,
          images: [...prev.images, reader.result]
        }));
      };
      reader.readAsDataURL(file);
    });
  };

  // Remove uploaded image from form data
  const removeImage = (index) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  // Form submission handler with validation
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.message.trim()) {
      return;
    }

    onAddReview(formData);

    // Reset form
    setFormData({
      name: '',
      rating: RATING.DEFAULT,
      message: '',
      images: []
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 animate-slideDown">
      {/* Form inputs section */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
            required
          />
        </div>

        {/* Star rating input */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Rating
          </label>
          <div
            className="flex gap-1"
            onMouseLeave={() => setHoverRating(0)}
          >
            {[...Array(RATING.MAX)].map((_, i) => i + 1).map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => handleStarClick(star)}
                onMouseEnter={() => setHoverRating(star)}
                className="text-3xl transition-colors focus:outline-none cursor-pointer"
              >
                <span className={star <= (hoverRating || formData.rating) ? 'text-primary' : 'text-gray-300'}>
                  ★
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
          Your Review
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          placeholder="Share your experience with this product..."
          className="w-full px-4 py-2.5 border border-gray-300 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
          required
        />
      </div>

      {/* Image upload section */}
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Photos (Optional)
        </label>

        {/* Uploaded image previews */}
        {formData.images.length > 0 && (
          <div className="flex flex-wrap gap-3 mb-3">
            {formData.images.map((image, index) => (
              <div key={index} className="relative group">
                <img 
                  src={image} 
                  alt={`Preview ${index + 1}`}
                  className="w-20 h-20 object-cover rounded-lg border border-gray-200"
                />
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity shadow-md cursor-pointer"
                >
                  <X size={14} />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Upload Button */}
        {formData.images.length < IMAGE_UPLOAD.MAX_COUNT && (
          <label 
            className="inline-flex items-center gap-2 px-4 py-2.5 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer text-gray-600 hover:border-primary hover:bg-primary-bg hover:text-primary transition-all"
          >
            <Upload size={18} />
            <span className="text-sm font-medium">Upload Photos</span>
            <input
              type="file"
              accept={IMAGE_UPLOAD.ACCEPTED_TYPES}
              multiple
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>
        )}
        <p className="text-xs text-gray-500 mt-2">
          Up to {IMAGE_UPLOAD.MAX_COUNT} photos, max {IMAGE_UPLOAD.MAX_SIZE_MB}MB each
        </p>
      </div>

      {/* Form action buttons */}
      <div className="flex gap-3 pt-2">
        <button 
          type="submit" 
          className="px-6 py-2.5 text-white rounded-xl font-medium shadow-sm hover:shadow-md cursor-pointer bg-primary hover:bg-primary-hover transition-all"
        >
          Submit Review
        </button>
        <button 
          type="button"
          onClick={onCancel}
          className="px-6 py-2.5 text-gray-700 rounded-xl hover:bg-gray-100 transition-colors font-medium cursor-pointer"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
