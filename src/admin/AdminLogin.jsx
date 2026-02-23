import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAdminAuth } from "../context/AdminAuthContext";
import API from "../api/api";

const AdminLogin = () => {
  const navigate = useNavigate();
  const { loginAdmin } = useAdminAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle login submit
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await API.post(
        "/api/auth/admin/login",
        formData
      );

      const { id, name, email, message } = response.data;

      // Save login state in localStorage
      localStorage.setItem("isAdminAuthenticated", "true");
      localStorage.setItem(
        "adminInfo",
        JSON.stringify({ id, name, email })
      );

      // Update context state (IMPORTANT!)
      loginAdmin();

      toast.success(message || "Login successful!");

      // Navigate after short delay
      setTimeout(() => {
        navigate("/admin/panel", { replace: true });
      }, 1200);

    } catch (error) {
      const errMsg = error.response?.data?.message || "Login failed";
      toast.error(errMsg);
      console.error("Login failed:", errMsg);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <ToastContainer position="top-right" autoClose={2000} />

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
          className="mb-4 w-full px-4 py-2 border border-gray-300 rounded-lg
                    focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          className="mb-6 w-full px-4 py-2 border border-gray-300 rounded-lg
                    focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200"
        >
          Login
        </button>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link to="/admin/signup" className="text-blue-600 hover:underline">
            Signup here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default AdminLogin;
