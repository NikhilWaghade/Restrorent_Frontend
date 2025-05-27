// src/pages/ProductDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5000/api/menu/${id}`);
        setItem(data);
        setReviews(data.reviews || []);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching item details:', error);
        setLoading(false);
      }
    };
    fetchItem();
  }, [id]);

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    setError('');
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
      setReviews(data.reviews);
      setUserName('');
      setUserRating(5);
      setUserComment('');
    } catch (err) {
      console.error('Failed to submit review:', err);
      setError('Failed to submit review. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handlePayment = async () => {
    try {
      // Call your backend to create Razorpay order
      const { data: order } = await axios.post('http://localhost:5000/api/payment/order', {
        amount: item.price * 100, // in paisa
      });

      const options = {
        key: 'rzp_test_YourKeyHere', // Replace with your Razorpay key
        amount: order.amount,
        currency: 'INR',
        name: 'Excellup Coding Store',
        description: `Order for ${item.name}`,
        image: '/logo.png', // optional logo
        order_id: order.id,
        handler: async function (response) {
          alert('Payment successful!');
          console.log(response);
          // Optionally send payment success to backend
        },
        prefill: {
          name: 'Customer Name',
          email: 'customer@example.com',
          contact: '9999999999',
        },
        theme: {
          color: '#EF4444',
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error('Payment initiation failed:', error);
      alert('Payment failed. Please try again.');
    }
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!item) return <p className="text-center mt-10">Product not found.</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img src={item.imageUrl} alt={item.name} className="w-full h-64 object-contain" />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-2">{item.name}</h1>
          <p className="text-gray-700 text-lg mb-2">Price: ₹{item.price}</p>
          <p className="text-sm text-gray-600 mb-4">Category: {item.category}</p>
          <p className="mb-6">{item.description}</p>

          <hr className="my-6" />

          <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
          {reviews.length > 0 ? (
            reviews.map((review, index) => (
              <div key={index} className="mb-4 border-b pb-4">
                <p className="font-semibold">{review.user}</p>
                <p className="text-yellow-500">
                  {'⭐'.repeat(review.rating)}{' '}
                  <span className="text-gray-600">({review.rating}/5)</span>
                </p>
                <p>{review.comment}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-600 mb-6">No reviews yet. Be the first to review!</p>
          )}

          <form onSubmit={handleReviewSubmit} className="mt-6">
            <h3 className="text-xl font-semibold mb-4">Add Your Review</h3>
            {error && <p className="text-red-600 mb-3">{error}</p>}

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

      {/* Payment Button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={handlePayment}
          className="bg-green-600 text-white py-3 px-6 rounded hover:bg-green-700 transition text-lg"
        >
          Confirm & Pay Now
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
