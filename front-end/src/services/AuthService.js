import axios from 'axios';
import axiosInstance from "../config/axiosConfig";

const API_URL = "/";

const register = (firstName, lastName, email, password) => {
    console.log("posting!");
    localStorage.clear();
    return axiosInstance.post(API_URL + "signup", {
        firstName, lastName, email, password
    });
};

const login = (email, password) => {
    localStorage.clear();
    return axiosInstance.post(API_URL + "signin", {
        email,
        password
    })
        .then(response => {
            console.log(response);
            if (response.data) {
                console.log("DATA: " + JSON.stringify(response.data));
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data;
        });
};

const logout = () => {
    localStorage.removeItem("user");
};

const getCurrentUser = () => {
    return axiosInstance.get(API_URL + 'user')
        .then(response => {
            console.log("getCurrentUser auth service: " + JSON.stringify(response.data, null, 2));
            return response.data;
        })
        .catch(error => {
            if (error.response && error.response.status === 401) {
                // Token might be expired or invalid; clear localStorage and handle accordingly
                logout();
            }
            console.error('Error fetching user data:', error);
            return null;
        });
};

export default {
    register,
    login,
    logout,
    getCurrentUser
};
