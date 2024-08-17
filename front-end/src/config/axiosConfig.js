import axios from 'axios';
import AuthService from "../services/AuthService";

// Create an Axios instance with a base URL and default headers
const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080/api/v1',  // Replace with your backend's base URL if different
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add an interceptor to attach the JWT token to each request if the user is logged in
axiosInstance.interceptors.request.use(
    config => {
        // Get the user from localStorage
        console.log("REACHED INTER");
        const user = JSON.parse(localStorage.getItem('user'));
        //console.log("USER" + user);
        if (user && user.token){
            console.log("USER" + user.token);
        }
        // If a user is logged in and has a token
        if (user && user.token) {
            // Add the token to the Authorization header
            config.headers['Authorization'] = `Bearer ${user.token}`;
        }

        return config;
    },
    error => {
        // Handle request error
        return Promise.reject(error);
    }
);

export default axiosInstance;