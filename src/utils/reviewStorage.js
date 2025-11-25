// Sample reviews data 
export const sampleReviews = [];


// localStorage key
const STORAGE_KEY = 'product_reviews';

// Load user reviews from localStorage
export const loadStoredReviews = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Error loading reviews:', error);
    return [];
  }
};

// Save user reviews to localStorage
export const saveStoredReviews = (reviews) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(reviews));
  } catch (error) {
    console.error('Error saving reviews:', error);
  }
};

// Get all reviews 
export const getAllReviews = () => {
  const storedReviews = loadStoredReviews();
  // Combine sample reviews with stored reviews 
  return [...storedReviews, ...sampleReviews];
};

// Add a new review
export const addNewReview = (review) => {
  const storedReviews = loadStoredReviews();
  const updatedReviews = [review, ...storedReviews];
  saveStoredReviews(updatedReviews);
  return updatedReviews;
};
