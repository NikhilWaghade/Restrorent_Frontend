import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import AdminPanel from './components/AdminPanel';
import ProductDetail from './components/ProductDetail';
import AdminLogin from './admin/AdminLogin';
import AdminSignup from './admin/AdminSignup';
import ProtectedRoute from './components/ProtectedRoute';



function App() {
  return (
    
    <Router>
      <Navbar />
      <Routes>

         {/* pages routes */}
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/product/:id" element={<ProductDetail />} />

        {/* admin routes */}
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/signup" element={<AdminSignup />} />

      {/* Protected Admin Panel Route */}
     <Route
  path="/admin/panel"
  element={
    <ProtectedRoute>
      <AdminPanel />
    </ProtectedRoute>
  }
/>
      </Routes>
       <Footer />
    </Router>
    
  );
}

export default App;
