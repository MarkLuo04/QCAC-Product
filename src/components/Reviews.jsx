import React from 'react';

export default function Reviews({ reviews }) {
  return (
    <section className="py-20 px-8 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">Customer Reviews</h2>
      <div className="max-w-3xl mx-auto space-y-6">
        {reviews.length === 0 ? (
          <p className="text-center text-gray-500 py-12">No reviews yet. Be the first to review!</p>
        ) : (
          reviews.map((review, index) => (
            <div key={index} className="p-8 bg-white rounded-lg">
              <div className="flex justify-between items-start mb-4">
                <strong className="text-lg text-gray-900">{review.name}</strong>
                <span className="text-sm font-medium text-yellow-600">★ {review.rating}/5</span>
              </div>
              <p className="text-gray-700 leading-relaxed">{review.message}</p>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
