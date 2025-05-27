import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { Line, Bar } from 'react-chartjs-2';
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
} from 'chart.js';
import {
  FaChartLine,
  FaPlus,
  FaList,
  FaSignOutAlt,
} from 'react-icons/fa';

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
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    imageUrl: '',
  });
  const [editId, setEditId] = useState(null);
  const [activeSection, setActiveSection] = useState('dashboard');
  const navigate = useNavigate();

  const fetchItems = async () => {
    try {
      const { data } = await axios.get('http://localhost:5000/api/menu');
      setItems(Array.isArray(data) ? data : []);
    } catch (error) {
      toast.error('Failed to fetch menu items');
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        await axios.put(`http://localhost:5000/api/menu/${editId}`, form);
        toast.success('Menu item updated successfully!');
      } else {
        await axios.post('http://localhost:5000/api/menu', form);
        toast.success('Menu item added successfully!');
      }
      setForm({ name: '', description: '', price: '', category: '', imageUrl: '' });
      setEditId(null);
      fetchItems();
    } catch (error) {
      toast.error('Failed to submit menu item');
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/menu/${id}`);
      toast.success('Item deleted successfully!');
      fetchItems();
    } catch (error) {
      toast.error('Failed to delete item');
    }
  };

  const handleEdit = (item) => {
    setForm(item);
    setEditId(item._id);
    setActiveSection('add');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    toast.success('Logged out successfully');
    setTimeout(() => {
      navigate('/');
    }, 1000);
  };

  const growthData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'User Growth',
        data: [50, 75, 150, 200, 250],
        borderColor: 'rgb(34 197 94)',
        backgroundColor: 'rgba(34, 197, 94, 0.5)',
      },
    ],
  };

  const salesData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Product Sales',
        data: [30, 60, 100, 180, 220],
        backgroundColor: 'rgb(59 130 246)',
      },
    ],
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <ToastContainer position="top-right" autoClose={3000} />

      {/* Sidebar */}
      <div className="bg-gray-800 text-white p-4 w-full md:w-64 flex md:flex-col items-center md:items-start">
        <h2 className="text-xl font-bold mb-6 hidden md:block">Admin</h2>
        <div className="flex md:flex-col gap-3 w-full justify-around md:justify-start">
          <button
            onClick={() => setActiveSection('dashboard')}
            className="flex items-center gap-2 py-2 px-3 hover:bg-gray-700 rounded w-full"
          >
            <FaChartLine />
            <span className="hidden md:inline">Dashboard</span>
          </button>
          <button
            onClick={() => setActiveSection('add')}
            className="flex items-center gap-2 py-2 px-3 hover:bg-gray-700 rounded w-full"
          >
            <FaPlus />
            <span className="hidden md:inline">Add Product</span>
          </button>
          <button
            onClick={() => setActiveSection('list')}
            className="flex items-center gap-2 py-2 px-3 hover:bg-gray-700 rounded w-full"
          >
            <FaList />
            <span className="hidden md:inline">Product List</span>
          </button>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 py-2 px-3 hover:bg-gray-700 rounded w-full"
          >
            <FaSignOutAlt />
            <span className="hidden md:inline">Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 overflow-y-auto">
        {activeSection === 'dashboard' && (
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

        {activeSection === 'add' && (
          <div className="mt-4">
            <h2 className="text-xl font-semibold mb-4">{editId ? 'Edit Menu Item' : 'Add Menu Item'}</h2>
            <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded space-y-4">
              <input type="text" placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full p-2 border rounded" required />
              <input type="text" placeholder="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className="w-full p-2 border rounded" required />
              <input type="number" placeholder="Price" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} className="w-full p-2 border rounded" required />
              <input type="text" placeholder="Category" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} className="w-full p-2 border rounded" required />
              <input type="text" placeholder="Image URL" value={form.imageUrl} onChange={(e) => setForm({ ...form, imageUrl: e.target.value })} className="w-full p-2 border rounded" required />
              <div className="flex flex-wrap gap-4">
                <button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
                  {editId ? 'Update Item' : 'Add Item'}
                </button>
                {editId && (
                  <button
                    type="button"
                    onClick={() => {
                      setForm({ name: '', description: '', price: '', category: '', imageUrl: '' });
                      setEditId(null);
                    }}
                    className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </div>
        )}

        {activeSection === 'list' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {items.length ? (
              items.map((item) => (
                <div key={item._id} className="bg-white p-3 rounded shadow text-sm">
                  <h3 className="text-base font-semibold">{item.name} <span className="text-green-600">(${item.price})</span></h3>
                  <p className="text-gray-600 mb-1">{item.description}</p>
                  <p className="text-gray-500 text-sm">Category: {item.category}</p>
                  {item.imageUrl && <img src={item.imageUrl} alt={item.name} className="w-full h-28 object-cover mt-2 rounded" />}
                  <div className="flex gap-2 mt-2">
                    <button onClick={() => handleEdit(item)} className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 text-xs rounded">Edit</button>
                    <button onClick={() => handleDelete(item._id)} className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 text-xs rounded">Delete</button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 col-span-full">No menu items found.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
