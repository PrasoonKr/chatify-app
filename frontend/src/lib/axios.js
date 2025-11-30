import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "http://localhost:3000/api" : "https://chatify-app-r46d.onrender.com/api",
  withCredentials: true,
});
