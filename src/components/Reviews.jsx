import React from 'react';

export default function Reviews({ reviews }) {
  return (
    <section>
      <h2></h2>
      <div>
        {reviews.length === 0 ? (
          <p></p>
        ) : (
          reviews.map((review, index) => (
            <div key={index}>
              <div>
                <strong>{review.name}</strong>
                <span>{review.rating}</span>
              </div>
              <p>{review.message}</p>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
