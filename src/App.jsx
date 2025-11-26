import React, { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import ProductSection from './components/ProductSection.jsx';
import Features from './components/Features.jsx';
import Reviews from './components/Reviews.jsx';
import { getAllReviews, addNewReview } from './utils/reviewStorage.js';

export default function App() {
  const [reviews, setReviews] = useState([]);

  // Load reviews on mount
  useEffect(() => {
    setReviews(getAllReviews());
  }, []);

  // Handle adding new review
  const handleAddReview = (newReview) => {
    addNewReview(newReview);
    setReviews(getAllReviews());
  };

  return (
    <div className="app">
      <Header />
      <ProductSection />
      <Features />
      <Reviews reviews={reviews} onAddReview={handleAddReview} />
    </div>
  );
}
