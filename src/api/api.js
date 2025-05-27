// src/api/api.js
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // Change this URL to your backend base URL
  withCredentials: true, // if you're using cookies/sessions
});

export default API;
