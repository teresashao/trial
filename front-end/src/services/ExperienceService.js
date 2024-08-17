import axiosInstance from "../config/axiosConfig";
import axios from "axios";
import axiosPublic from "../config/axiosPublic";

const API_URL = "/experiences";

const createExperience = (title, description) => {
    return axiosInstance.post(API_URL + "", {
        title, description
    });
};

const getAllExperiences = () => {
    return axiosPublic.get(API_URL);
};

const getExperienceById = (id) => {
    return axiosPublic.get(API_URL + "/" + id, {});
}

const addExperienceToUser = (id) => {
    return axiosInstance.post(API_URL + "/user-add/" + id, {});
}

const deleteExperience = (id) => {
    return axiosInstance.delete(API_URL + "/" + id, {});
}

export default {
    createExperience,
    getAllExperiences,
    getExperienceById,
    addExperienceToUser,
    deleteExperience
};
