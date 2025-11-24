import React from 'react';

export default function Reviews({ reviews }) {
  return (
    <section className="max-w-6xl mx-auto px-8 py-12 border-t border-gray-200">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Customer Reviews</h2>
      <div className="space-y-6">
        {reviews.length === 0 ? (
          <p className="text-gray-500 py-8">No reviews yet. Be the first to review!</p>
        ) : (
          reviews.map((review, index) => (
            <div key={index} className="pb-6 border-b border-gray-200">
              <div className="flex justify-between items-start mb-2">
                <strong className="text-gray-900">{review.name}</strong>
                <span className="text-sm text-teal-600">★ {review.rating}/5</span>
              </div>
              <p className="text-gray-700">{review.message}</p>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
