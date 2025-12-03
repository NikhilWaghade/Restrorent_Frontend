import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { item } = location.state || {};

  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // Redirect if no item data
    if (!item) {
      navigate('/menu');
    }
  }, [item, navigate]);

  const handlePayment = async (e) => {
    e.preventDefault();
    setError('');

    // Validation
    if (!customerName.trim() || !customerEmail.trim() || !customerPhone.trim()) {
      setError('Please fill in all fields');
      return;
    }

    if (!/^\d{10}$/.test(customerPhone)) {
      setError('Please enter a valid 10-digit phone number');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerEmail)) {
      setError('Please enter a valid email address');
      return;
    }

    setLoading(true);

    try {
      // Create order on backend
      const { data: order } = await axios.post('http://localhost:5000/api/payment/order', {
        amount: item.price * 100, // Convert to paise
      });

      // Razorpay options
      const options = {
        key: 'rzp_test_YourKeyHere', // Replace with your Razorpay Test Key
        amount: order.amount,
        currency: 'INR',
        name: 'Swaad Nation Restaurant',
        description: `Order for ${item.name}`,
        image: '/logo.png', // Your restaurant logo
        order_id: order.id,
        handler: async function (response) {
          // Payment success
          console.log('Payment Success:', response);
          
          // You can verify payment on backend here
          try {
            await axios.post('http://localhost:5000/api/payment/verify', {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            });
            
            alert(`Payment Successful! 🎉\nPayment ID: ${response.razorpay_payment_id}`);
            navigate('/menu');
          } catch (error) {
            console.error('Payment verification failed:', error);
            alert('Payment received but verification failed. Please contact support.');
          }
        },
        prefill: {
          name: customerName,
          email: customerEmail,
          contact: customerPhone,
        },
        notes: {
          product_name: item.name,
          product_id: item.id,
        },
        theme: {
          color: '#EF4444', // Red theme matching your restaurant
        },
        modal: {
          ondismiss: function() {
            setLoading(false);
            alert('Payment cancelled. You can try again.');
          }
        }
      };

      const rzp = new window.Razorpay(options);
      
      rzp.on('payment.failed', function (response) {
        setLoading(false);
        console.error('Payment failed:', response.error);
        setError(`Payment failed: ${response.error.description}`);
      });

      rzp.open();
      setLoading(false);
    } catch (error) {
      console.error('Payment initiation failed:', error);
      setError('Failed to initiate payment. Please try again.');
      setLoading(false);
    }
  };

  if (!item) {
    return null; // Will redirect
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Checkout</h1>
          <p className="text-gray-600">Complete your order with Razorpay secure payment</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Order Summary</h2>
            
            <div className="border-b pb-4 mb-4">
              <img 
                src={item.image_url} 
                alt={item.name} 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
              <p className="text-gray-600 text-sm mt-2">{item.description}</p>
              <p className="text-sm text-gray-500 mt-1">Category: {item.category}</p>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Item Price:</span>
                <span className="font-semibold">₹{item.price}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">GST (5%):</span>
                <span className="font-semibold">₹{(item.price * 0.05).toFixed(2)}</span>
              </div>
              <div className="flex justify-between border-t pt-2">
                <span className="text-lg font-bold text-gray-800">Total Amount:</span>
                <span className="text-lg font-bold text-red-600">
                  ₹{(item.price * 1.05).toFixed(2)}
                </span>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <p className="text-sm text-green-800 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Secure payment powered by Razorpay
              </p>
            </div>
          </div>

          {/* Customer Details Form */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Customer Details</h2>
            
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                {error}
              </div>
            )}

            <form onSubmit={handlePayment} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  required
                  disabled={loading}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  required
                  disabled={loading}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                  placeholder="10-digit mobile number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  required
                  disabled={loading}
                  maxLength="10"
                />
                <p className="text-xs text-gray-500 mt-1">Enter 10-digit mobile number</p>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-4 px-6 rounded-lg text-white font-semibold text-lg transition-all duration-300 ${
                  loading 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-green-600 hover:bg-green-700 hover:shadow-lg transform hover:scale-105'
                }`}
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Processing...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    Pay ₹{(item.price * 1.05).toFixed(2)}
                  </span>
                )}
              </button>

              <div className="text-center mt-4">
                <button
                  type="button"
                  onClick={() => navigate(-1)}
                  className="text-red-600 hover:text-red-700 font-medium"
                  disabled={loading}
                >
                  ← Back to Product
                </button>
              </div>
            </form>

            {/* Payment Methods */}
            <div className="mt-6 pt-6 border-t">
              <p className="text-sm text-gray-600 mb-3">We accept:</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded text-xs font-semibold">UPI</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded text-xs font-semibold">Cards</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded text-xs font-semibold">Wallets</span>
                <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded text-xs font-semibold">Net Banking</span>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-3xl mb-2">🔒</div>
              <p className="text-sm font-semibold text-gray-800">Secure Payment</p>
            </div>
            <div>
              <div className="text-3xl mb-2">⚡</div>
              <p className="text-sm font-semibold text-gray-800">Quick Checkout</p>
            </div>
            <div>
              <div className="text-3xl mb-2">✅</div>
              <p className="text-sm font-semibold text-gray-800">100% Safe</p>
            </div>
            <div>
              <div className="text-3xl mb-2">🎁</div>
              <p className="text-sm font-semibold text-gray-800">Easy Refund</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;

