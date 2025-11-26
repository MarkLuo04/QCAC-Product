import React, { useState } from 'react';
import { X, Upload } from 'lucide-react';

export default function AddReviewForm({ onAddReview, onCancel }) {
  const [formData, setFormData] = useState({
    name: '',
    rating: 5,
    message: '',
    images: []
  });
  const [hoverRating, setHoverRating] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'rating' ? parseInt(value) : value
    }));
  };

  const handleStarClick = (rating) => {
    setFormData(prev => ({
      ...prev,
      rating: rating
    }));
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    
    // Limit to 2 images total
    if (formData.images.length + files.length > 2) {
      alert('You can upload a maximum of 2 images');
      return;
    }

    files.forEach(file => {
      // Check file size 
      if (file.size > 2 * 1024 * 1024) {
        alert('Each image must be less than 2MB');
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

  const removeImage = (index) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.message.trim()) {
      return;
    }

    onAddReview(formData);

    // Reset form
    setFormData({
      name: '',
      rating: 5,
      message: '',
      images: []
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 animate-slideDown">
      <div className="grid md:grid-cols-2 gap-4">
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
            className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
            placeholder="Your name"
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Rating
          </label>
          <div 
            className="flex gap-1"
            onMouseLeave={() => setHoverRating(0)}
          >
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => handleStarClick(star)}
                onMouseEnter={() => setHoverRating(star)}
                className="text-3xl transition-colors focus:outline-none cursor-pointer"
              >
                <span className={
                  star <= (hoverRating || formData.rating)
                    ? 'text-teal-600'
                    : 'text-gray-300'
                }>
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
          rows="4"
          className="w-full px-4 py-2.5 border border-gray-300 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
          placeholder="Share your experience with this product..."
          required
        />
      </div>

      {/* Image Upload */}
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Photos (Optional)
        </label>
        
        {/* Image Previews */}
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
        {formData.images.length < 2 && (
          <label className="inline-flex items-center gap-2 px-4 py-2.5 border-2 border-dashed border-gray-300 rounded-xl hover:border-teal-500 hover:bg-teal-50 transition-all cursor-pointer text-gray-600 hover:text-teal-600">
            <Upload size={18} />
            <span className="text-sm font-medium">Upload Photos</span>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>
        )}
        <p className="text-xs text-gray-500 mt-2">
          Up to 2 photos, max 2MB each
        </p>
      </div>

      <div className="flex gap-3 pt-2">
        <button 
          type="submit" 
          className="px-6 py-2.5 bg-teal-600 text-white rounded-xl hover:bg-teal-700 transition-all font-medium shadow-sm hover:shadow-md cursor-pointer"
        >
          Submit Review
        </button>
        <button 
          type="button"
          onClick={onCancel}
          className="px-6 py-2.5 text-gray-700 rounded-xl hover:bg-gray-100 transition-all font-medium cursor-pointer"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
