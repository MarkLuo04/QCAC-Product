import React, { useState, useEffect } from 'react';
import { ThumbsUp } from 'lucide-react';

const HELPFUL_STORAGE_KEY = 'review_helpful_data';

export default function Reviews({ reviews }) {
  // Track helpful counts and clicked state for each review
  const [helpfulData, setHelpfulData] = useState({ counts: [], clicked: [] });

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
    return [...Array(5)].map((_, i) => (
      <span key={i} className={i < rating ? "text-teal-600" : "text-gray-300"}>★</span>
    ));
  };

  return (
    <section className="max-w-6xl mx-auto px-8 py-12 border-t border-gray-200">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Customer Reviews</h2>
      
      {reviews.length === 0 ? (
        <p className="text-gray-500 py-8">No reviews yet. Be the first to review!</p>
      ) : (
        <>
          {/* Rating Summary */}
          <div className="mb-8 pb-8 border-b border-gray-200">
            <div className="flex items-start gap-8">
              {/* Average Rating */}
              <div className="text-center">
                <div className="text-5xl font-bold text-gray-900 mb-2">{averageRating}</div>
                <div className="flex text-xl mb-1">{renderStars(Math.round(averageRating))}</div>
                <div className="text-sm text-gray-600">{reviews.length} {reviews.length === 1 ? 'review' : 'reviews'}</div>
              </div>

              {/* Rating Breakdown */}
              <div className="flex-1">
                {[5, 4, 3, 2, 1].map(star => (
                  <div key={star} className="flex items-center gap-3 mb-2">
                    <span className="text-sm font-medium text-gray-700 w-12">{star} star</span>
                    <div className="flex-1 h-5 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-teal-600" 
                        style={{ width: `${reviews.length > 0 ? (ratingCounts[star - 1] / reviews.length) * 100 : 0}%` }}
                      />
                    </div>
                    <span className="text-sm text-gray-600 w-8">{ratingCounts[star - 1]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Individual Reviews */}
          <div className="space-y-4">
            {reviews.map((review, index) => (
              <div key={index} className="p-6 border border-gray-100 rounded-2xl bg-white">
                <div className="flex items-start gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center font-semibold text-teal-700">
                    {review.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">{review.name}</div>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex text-sm">{renderStars(review.rating)}</div>
                      <span className="text-sm text-gray-600">
                        {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mt-3">{review.message}</p>
                <button 
                  onClick={() => handleHelpfulClick(index)}
                  disabled={helpfulData.clicked[index]}
                  className={`mt-3 flex items-center gap-2 text-sm cursor-pointer ${
                    helpfulData.clicked[index] 
                      ? 'text-teal-600' 
                      : 'text-gray-600 hover:text-teal-600'
                  }`}
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
  );
}
