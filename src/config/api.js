// API Configuration
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const API_ENDPOINTS = {
  BASE_URL: API_URL,
  MENU: `${API_URL}/api/menu`,
  MENU_BY_ID: (id) => `${API_URL}/api/menu/${id}`,
  ADMIN_LOGIN: `${API_URL}/api/admin/login`,
  ADMIN_SIGNUP: `${API_URL}/api/admin/signup`,
  ADMIN_VERIFY: `${API_URL}/api/admin/verify`,
};

export default API_URL;
