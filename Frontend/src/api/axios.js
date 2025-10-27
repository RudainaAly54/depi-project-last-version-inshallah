// src/api/axios.js
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL + "/api", // uses your .env backend URL
  withCredentials: true, // 👈 always send/receive cookies
});

<<<<<<< HEAD


=======
>>>>>>> 01c123bc57e31401aa3b9e5d1f67dee9e1186cb0
export default api;
