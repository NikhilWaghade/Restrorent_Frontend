// import axios from "axios";

// const API = axios.create({
//   // baseURL: "https://restrorent-backend-c41v.vercel.app/api",
//   baseURL: "https://restrorent-backend.onrender.com",
//   withCredentials: true,
// });

// export default API;


import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,

  // baseURL: "https://restrorent-backend-c41v.vercel.app/api", 
    baseURL: "https://restrorent-backend.onrender.com", 
  withCredentials: true, 

});

export default API;
