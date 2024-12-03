import React from 'react'
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: "http://localhost:8080", // Replace with your backend URL
  });
  
  // Interceptor to add token to request headers
  axiosInstance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token"); // Retrieve token from local storage
      if (token) {
        config.headers.Authorization = `Bearer ${token}`; // Add token to Authorization header
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  
  // Interceptor for response errors (e.g., token expiration)
  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response && error.response.status === 401) {
        // Handle unauthorized errors (e.g., expired or invalid token)
        localStorage.removeItem("token");
        window.location.href = "/login"; // Redirect to login page
      }
      return Promise.reject(error);
    }
  );

export default axiosInstance
