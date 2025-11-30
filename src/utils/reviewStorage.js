import emptyCup from '../images/empty_cup.jpg';
// Sample reviews data
export const sampleReviews = [
  {
    name: "Mark Luo",
    rating: 5,
    message: "Great cup would buy again",
    images: [],
    date: "2024-11-25"
  },
  {
    name: "Yae Miko",
    rating: 5,
    message: "I love the color-changing effect and the aesthetics of the cup!",
    images: [],
    date: "2024-11-20"
  },
  {
    name: "John Appleseed",
    rating: 1,
    message: "Bad quality product. I put it in the dishwasher multiple times and all the designs have been rubbed off. The straw also fell off and I can no longer find it.",
    images: [emptyCup],
    date: "2024-11-15"
  }
];


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
  // Add timestamp to new review
  const reviewWithDate = {
    ...review,
    date: new Date().toISOString().split('T')[0] // YYYY-MM-DD format
  };
  const updatedReviews = [reviewWithDate, ...storedReviews];
  saveStoredReviews(updatedReviews);
  return updatedReviews;
};
