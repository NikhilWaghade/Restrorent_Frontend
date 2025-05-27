import React, { createContext, useContext, useState, useEffect } from 'react';

const AdminAuthContext = createContext();

export const AdminAuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check localStorage or API to restore admin session on page reload
    const storedAdmin = localStorage.getItem('isAdminAuthenticated');
    if (storedAdmin === 'true') {
      setAdmin(true);
    } else {
      setAdmin(null);
    }
    setLoading(false);
  }, []);

  const loginAdmin = () => {
    setAdmin(true);
    localStorage.setItem('isAdminAuthenticated', 'true');
  };

  const logoutAdmin = () => {
    setAdmin(null);
    localStorage.removeItem('isAdminAuthenticated');
  };

  return (
    <AdminAuthContext.Provider value={{ admin, loginAdmin, logoutAdmin, loading }}>
      {children}
    </AdminAuthContext.Provider>
  );
};

export const useAdminAuth = () => useContext(AdminAuthContext);
