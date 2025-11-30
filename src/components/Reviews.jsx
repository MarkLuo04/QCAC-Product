import React, { useState, useEffect } from 'react';
import { ThumbsUp, X } from 'lucide-react';
import AddReviewForm from './AddReviewForm.jsx';

const HELPFUL_STORAGE_KEY = 'review_helpful_data';

export default function Reviews({ reviews, onAddReview }) {
  // Track helpful counts and clicked state for each review
  const [helpfulData, setHelpfulData] = useState({ counts: [], clicked: [] });
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Load helpful data from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(HELPFUL_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        setHelpfulData(parsed);
      } else {
        setHelpfulData({
          counts: reviews.map(() => 0),
          clicked: reviews.map(() => false)
        });
      }
    } catch (error) {
      setHelpfulData({
        counts: reviews.map(() => 0),
        clicked: reviews.map(() => false)
      });
    }
  }, [reviews.length]);

  // Save helpful data to localStorage
  const saveHelpfulData = (data) => {
    try {
      localStorage.setItem(HELPFUL_STORAGE_KEY, JSON.stringify(data));
    } catch (error) {
      console.error('Error saving helpful data:', error);
    }
  };

  // Handle helpful click
  const handleHelpfulClick = (index) => {
    // Only allow clicking once
    if (helpfulData.clicked[index]) return;

    const newData = {
      counts: [...helpfulData.counts],
      clicked: [...helpfulData.clicked]
    };
    
    newData.counts[index] = (newData.counts[index] || 0) + 1;
    newData.clicked[index] = true;
    
    setHelpfulData(newData);
    saveHelpfulData(newData);
  };

  // Handle review submission
  const handleReviewSubmit = (reviewData) => {
    onAddReview(reviewData);
    setIsFormVisible(false);
  };

  // Handle image modal
  const openImageModal = (image) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  // Close modal on ESC key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeImageModal();
      }
    };

    if (selectedImage) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  // Calculate average rating
  const averageRating = reviews.length > 0
    ? (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1)
    : 0;

  // Calculate rating distribution
  const ratingCounts = [0, 0, 0, 0, 0];
  reviews.forEach(review => {
    ratingCounts[review.rating - 1]++;
  });

  // Render star display
  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => {
      const fillPercentage = Math.min(Math.max(rating - i, 0), 1);
      
      if (fillPercentage === 1) {
        // Full star
        return <span key={i} style={{ color: 'var(--color-primary)' }}>★</span>;
      } else if (fillPercentage === 0) {
        // Empty star
        return <span key={i} className="text-gray-300">★</span>;
      } else {
        // Partial star
        return (
          <span key={i} className="relative inline-block">
            <span className="text-gray-300">★</span>
            <span 
              className="absolute top-0 left-0 overflow-hidden"
              style={{ width: `${fillPercentage * 100}%`, color: 'var(--color-primary)' }}
            >
              ★
            </span>
          </span>
        );
      }
    });
  };

  return (
    <>
      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeImageModal}
        >
          <button
            onClick={closeImageModal}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            aria-label="Close"
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Review photo full size"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <section className="max-w-6xl mx-auto px-8 py-12 border-t border-gray-200">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Customer Reviews</h2>
      
      {reviews.length === 0 ? (
        <p className="text-gray-500 py-8">No reviews yet. Be the first to review!</p>
      ) : (
        <>
          {/* Rating Summary */}
          <div className="mb-10">
            <div className="flex items-start gap-8">
              {/* Average Rating */}
              <div className="text-center">
                <div className="text-5xl font-bold text-gray-900 mb-2">{averageRating}</div>
                <div className="flex text-xl mb-1">{renderStars(parseFloat(averageRating))}</div>
                <div className="text-sm text-gray-600">{reviews.length} {reviews.length === 1 ? 'review' : 'reviews'}</div>
              </div>

              {/* Rating Breakdown */}
              <div className="flex-1">
                {[5, 4, 3, 2, 1].map(star => (
                  <div key={star} className="flex items-center gap-3 mb-2">
                    <span className="text-sm font-medium text-gray-700 w-12">{star} star</span>
                    <div className="flex-1 h-5 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full"
                        style={{ backgroundColor: 'var(--color-primary)' }} 
                        style={{ width: `${reviews.length > 0 ? (ratingCounts[star - 1] / reviews.length) * 100 : 0}%` }}
                      />
                    </div>
                    <span className="text-sm text-gray-600 w-8">{ratingCounts[star - 1]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Write Review Button and Form */}
          <div className="mb-10">
            {!isFormVisible ? (
              <button
                onClick={() => setIsFormVisible(true)}
                className="px-6 py-3 border-2 rounded-xl transition-all font-medium cursor-pointer"
                style={{ borderColor: 'var(--color-primary)', color: 'var(--color-primary)' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-primary-bg)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                Write a Review
              </button>
            ) : (
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Write a Review</h3>
                <AddReviewForm 
                  onAddReview={handleReviewSubmit}
                  onCancel={() => setIsFormVisible(false)}
                />
              </div>
            )}
          </div>

          {/* Individual Reviews */}
          <div className="space-y-4">
            {reviews.map((review, index) => (
              <div key={index} className="p-6 border border-gray-100 rounded-2xl bg-white">
                <div className="flex items-start gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-semibold" style={{ backgroundColor: 'var(--color-primary-light)', color: 'var(--color-primary-hover)' }}>
                    {review.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">{review.name}</div>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex text-sm" style={{ color: 'var(--color-primary)' }}>{renderStars(review.rating)}</div>
                      <span className="text-sm text-gray-600">
                        {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mt-3">{review.message}</p>
                
                {/* Review Images */}
                {review.images && review.images.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {review.images.map((image, imgIndex) => (
                      <img
                        key={imgIndex}
                        src={image}
                        alt={`Review photo ${imgIndex + 1}`}
                        className="w-24 h-24 object-cover rounded-lg border border-gray-200 cursor-pointer"
                        onClick={() => openImageModal(image)}
                      />
                    ))}
                  </div>
                )}
                
                <button 
                  onClick={() => handleHelpfulClick(index)}
                  disabled={helpfulData.clicked[index]}
                  className="mt-3 flex items-center gap-2 text-sm cursor-pointer"
                  style={{ color: helpfulData.clicked[index] ? 'var(--color-primary)' : 'var(--color-text-secondary)' }}
                  onMouseEnter={(e) => !helpfulData.clicked[index] && (e.currentTarget.style.color = 'var(--color-primary)')}
                  onMouseLeave={(e) => !helpfulData.clicked[index] && (e.currentTarget.style.color = 'var(--color-text-secondary)')}
                >
                  <ThumbsUp size={16} />
                  <span>Helpful ({helpfulData.counts[index] || 0})</span>
                </button>
              </div>
            ))}
          </div>
        </>
      )}
      </section>
    </>
  );
}
