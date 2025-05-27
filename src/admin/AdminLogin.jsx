import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';  // import toast
import 'react-toastify/dist/ReactToastify.css'; // import toast styles

const AdminLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:5000/api/auth/admin-login',
        formData,
        { withCredentials: true }
      );

      localStorage.setItem('isAdminAuthenticated', 'true');
      toast.success('Login successful!'); // show toast success message

      // wait a bit so user sees toast, then navigate
      setTimeout(() => {
        navigate('/admin/panel');
      }, 1200);

      console.log('Login successful:', response.data);
    } catch (error) {
      console.error('Login failed:', error.response?.data?.message);
      toast.error(error.response?.data?.message || 'Login failed'); // show toast error message
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <ToastContainer position="top-right" autoClose={3000} /> {/* Toast container */}
      <form
        onSubmit={handleLogin}
        className="bg-white shadow-md rounded-xl p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Admin Login
        </h2>

        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="mb-4 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          className="mb-6 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200"
        >
          Login
        </button>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to="/admin/signup" className="text-blue-600 hover:underline">
            Signup here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default AdminLogin;
