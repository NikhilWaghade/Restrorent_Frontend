import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useAdminAuth } from "../context/AdminAuthContext";
import { FaChartLine, FaPlus, FaList, FaSignOutAlt, FaHome } from "react-icons/fa";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const AdminPanel = () => {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image_url: "",
  });
  const [editId, setEditId] = useState(null);
  const [activeSection, setActiveSection] = useState("dashboard");
  const navigate = useNavigate();
  const { logoutAdmin } = useAdminAuth();

  // Fetch Products
  const fetchProducts = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/menu");
      setProducts(data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch products");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Create / Update Product
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = { ...form, price: Number(form.price) };

      if (editId) {
        await axios.put(`http://localhost:5000/api/menu/${editId}`, payload);
        toast.success("Product updated successfully!");
      } else {
        await axios.post("http://localhost:5000/api/menu", payload);
        toast.success("Product added successfully!");
      }

      setForm({ name: "", description: "", price: "", category: "", image_url: "" });
      setEditId(null);
      setActiveSection("list");
      fetchProducts();
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Failed to submit product");
    }
  };

  // Delete
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/menu/${id}`);
      toast.success("Product deleted successfully!");
      fetchProducts();
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete product");
    }
  };

  // Edit
  const handleEdit = (product) => {
    setForm({ ...product });
    setEditId(product.id);
    setActiveSection("add");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("isAdminAuthenticated");
    localStorage.removeItem("adminInfo");
    
    // Update context state (IMPORTANT!)
    logoutAdmin();
    
    toast.success("Logged out successfully");
    setTimeout(() => navigate("/admin/login"), 1000);
  };

  // Dummy chart data
  const growthData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "User Growth",
        data: [50, 75, 150, 200, 250],
        borderColor: "rgb(34 197 94)",
        backgroundColor: "rgba(34, 197, 94, 0.5)",
      },
    ],
  };

  const salesData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Product Sales",
        data: [30, 60, 100, 180, 220],
        backgroundColor: "rgb(59 130 246)",
      },
    ],
  };

  return (
    <div className="flex min-h-screen">
      <ToastContainer position="top-right" autoClose={3000} />

      {/* Sidebar */}
      <div className="bg-gray-800 text-white w-64 flex flex-col p-4">
        <h2 className="text-2xl font-bold mb-6 text-center">Admin</h2>
        <div className="flex flex-col gap-3">
          <button
            onClick={() => setActiveSection("dashboard")}
            className={`flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-700 ${
              activeSection === "dashboard" ? "bg-gray-700" : ""
            }`}
          >
            <FaHome /> Dashboard
          </button>
          <button
            onClick={() => setActiveSection("add")}
            className={`flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-700 ${
              activeSection === "add" ? "bg-gray-700" : ""
            }`}
          >
            <FaPlus /> Add Product
          </button>
          <button
            onClick={() => setActiveSection("list")}
            className={`flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-700 ${
              activeSection === "list" ? "bg-gray-700" : ""
            }`}
          >
            <FaList /> Product List
          </button>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-700 mt-auto"
          >
            <FaSignOutAlt /> Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100">
        {/* Dashboard */}
        {activeSection === "dashboard" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-lg font-semibold mb-2">User Growth</h3>
              <Line data={growthData} />
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-lg font-semibold mb-2">Product Sales</h3>
              <Bar data={salesData} />
            </div>
          </div>
        )}

        {/* Add / Edit Product Full Width */}
        {activeSection === "add" && (
          <div className="bg-white p-6 rounded shadow w-full h-full">
            <h3 className="text-xl font-semibold mb-6">{editId ? "Edit Product" : "Add Product"}</h3>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="border p-2 rounded w-full"
                required
              />
              <input
                type="text"
                placeholder="Description"
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                className="border p-2 rounded w-full"
                required
              />
              <input
                type="number"
                placeholder="Price"
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
                className="border p-2 rounded w-full"
                required
              />
              <input
                type="text"
                placeholder="Category"
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                className="border p-2 rounded w-full"
                required
              />
              <input
                type="text"
                placeholder="Image URL"
                value={form.image_url}
                onChange={(e) => setForm({ ...form, image_url: e.target.value })}
                className="border p-2 rounded w-full md:col-span-2"
                required
              />
              <button
                type="submit"
                className="bg-green-600 text-white py-2 rounded hover:bg-green-700 md:col-span-2"
              >
                {editId ? "Update" : "Add"} Product
              </button>
            </form>
          </div>
        )}

        {/* Product List */}
        {activeSection === "list" && (
          <div>
            <h3 className="text-xl font-semibold mb-4">Product List</h3>
            {products.length ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {products.map((p) => (
                  <div
                    key={p.id}
                    className="bg-white p-4 rounded shadow flex flex-col items-center hover:shadow-lg transition-shadow duration-200"
                  >
                    <img
                      src={p.image_url}
                      alt={p.name}
                      className="w-32 h-32 object-cover rounded mb-2"
                    />
                    <h4 className="font-semibold">{p.name}</h4>
                    <p>${p.price}</p>
                    <p className="text-gray-500 text-sm">{p.category}</p>
                    <div className="flex gap-2 mt-2">
                      <button
                        onClick={() => handleEdit(p)}
                        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(p.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p>No products found</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
