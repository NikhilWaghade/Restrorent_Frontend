// import axios from "axios";

// const API = axios.create({
//   baseURL: "http://localhost:5000/api", 
//   withCredentials: true, 
// });

// export default API;



import axios from "axios";

const API = axios.create({
  baseURL: "https://restrorent-backend-c41v.vercel.app/api", 
  withCredentials: true, 
});

export default API;
