import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {
  const { id } = useParams();

  const [item, setItem] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [userName, setUserName] = useState('');
  const [userRating, setUserRating] = useState(5);
  const [userComment, setUserComment] = useState('');
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    if (!id || id === "undefined") {
      setLoading(false);
      setError('Product ID is missing. Please check the URL.');
      return;
    }

    const fetchItem = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5000/api/menu/${id}`);
        setItem(data);
        setReviews(data.reviews || []);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching item details:', error);
        setError('Failed to load product details. Please try again later.');
        setLoading(false);
      }
    };
    fetchItem();
  }, [id]);

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');
    
    if (!id || id === "undefined") {
      setError('Cannot submit review: Product ID is missing.');
      return;
    }
    
    if (!userName.trim() || !userComment.trim()) {
      setError('Please enter your name and comment.');
      return;
    }

    setSubmitting(true);
    try {
      const newReview = {
        user: userName,
        rating: userRating,
        comment: userComment,
      };
      
      const { data } = await axios.post(`http://localhost:5000/api/menu/${id}/reviews`, newReview);
      
      console.log("API Response:", data);
      
      // Handle different possible response formats from backend
      if (data.reviews) {
        // If backend returns the full reviews array
        setReviews(data.reviews);
      } else if (data.review) {
        // If backend returns just the new review
        setReviews(prevReviews => [...prevReviews, data.review]);
      } else if (data) {
        // If backend returns the updated product
        setReviews(data.reviews || []);
      } else {
        // If backend returns something unexpected, just add our local review
        setReviews(prevReviews => [...prevReviews, {
          user: userName,
          rating: userRating,
          comment: userComment,
          created_at: new Date().toISOString()
        }]);
      }
      
      setSuccessMessage('✅ Review submitted successfully! Thank you for your feedback.');
      setUserName('');
      setUserRating(5);
      setUserComment('');
      
      // Clear success message after 5 seconds
      setTimeout(() => setSuccessMessage(''), 5000);
    } catch (err) {
      console.error('Failed to submit review:', err);
      setError('Failed to submit review. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-red-500 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading product details...</p>
        </div>
      </div>
    );
  }
  
  if (!id || id === "undefined") {
    return (
      <div className="text-center mt-10 p-6">
        <p className="text-red-600 text-xl font-semibold">Error: Product ID is missing. Please check the URL.</p>
      </div>
    );
  }
  
  if (!item) {
    return (
      <div className="text-center mt-10 p-6">
        <p className="text-gray-600 text-xl">Product not found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      {error && (
        <div className="text-red-600 mb-4 text-center bg-red-100 p-3 rounded-lg border border-red-300">
          {error}
        </div>
      )}
      {successMessage && (
        <div className="text-green-600 mb-4 text-center bg-green-100 p-3 rounded-lg border border-green-300">
          {successMessage}
        </div>
      )}
      
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img src={item.image_url} alt={item.name} className="w-full h-64 object-contain" />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-2">{item.name}</h1>
          <p className="text-gray-700 text-lg mb-2">Price: ₹{item.price}</p>
          <p className="text-sm text-gray-600 mb-4">Category: {item.category}</p>
          <p className="mb-6">{item.description}</p>

          <hr className="my-6" />

          <h2 className="text-2xl font-bold mb-4">
            Customer Reviews 
            {reviews.length > 0 && (
              <span className="ml-2 text-sm font-normal text-gray-600">
                ({reviews.length} {reviews.length === 1 ? 'review' : 'reviews'})
              </span>
            )}
          </h2>
          {reviews.length > 0 ? (
            reviews.map((review, index) => (
              <div key={review.id || review._id || index} className="mb-4 border-b pb-4">
                <p className="font-semibold text-lg text-gray-800">
                  {review.user || 'Anonymous'}
                </p>
                <p className="text-yellow-500">
                  {'⭐'.repeat(review.rating)}{' '}
                  <span className="text-gray-600">({review.rating}/5)</span>
                </p>
                <p className="text-gray-700 mt-2">{review.comment}</p>
                <p className="text-xs text-gray-500 mt-1">
                  {new Date(review.created_at || review.createdAt || review.date).toLocaleDateString()}
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-600 mb-6">No reviews yet. Be the first to review!</p>
          )}

          <form onSubmit={handleReviewSubmit} className="mt-6">
            <h3 className="text-xl font-semibold mb-4">Add Your Review</h3>

            <label className="block mb-2">
              Name:
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                required
                disabled={submitting}
              />
            </label>

            <label className="block mb-2">
              Rating:
              <select
                value={userRating}
                onChange={(e) => setUserRating(Number(e.target.value))}
                className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                disabled={submitting}
              >
                {[5, 4, 3, 2, 1].map((r) => (
                  <option key={r} value={r}>
                    {r} Star{r > 1 ? 's' : ''}
                  </option>
                ))}
              </select>
            </label>

            <label className="block mb-4">
              Comment:
              <textarea
                value={userComment}
                onChange={(e) => setUserComment(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                rows={4}
                required
                disabled={submitting}
              />
            </label>

            <button
              type="submit"
              disabled={submitting}
              className="bg-pink-600 text-white px-5 py-2 rounded hover:bg-red-700 transition"
            >
              {submitting ? 'Submitting...' : 'Submit Review'}
            </button>
          </form>
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <Link
          to="/payment"
          state={{ item }}
          className="bg-green-600 text-white py-3 px-6 rounded hover:bg-green-700 transition text-lg font-semibold inline-flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          Confirm & Pay Now
        </Link>
      </div>
    </div>
  );
};

export default ProductDetail;