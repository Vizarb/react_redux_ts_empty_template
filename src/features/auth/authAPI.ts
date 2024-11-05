import axios from 'axios';

const API_URL = 'http://localhost:8000/api'; // Adjust to your Django URL

export const register = async (userData: { username: string; email: string; password: string }) => {
    const response = await axios.post(`${API_URL}/register/`, userData);
    return response.data;
};

export const login = async (userData: { username: string; password: string }) => {
    const response = await axios.post(`${API_URL}/login/`, userData);
    return response.data;
};

export const refreshAccessToken = async (refreshToken: string) => {
    const response = await axios.post(`${API_URL}/token/refresh/`, { refresh: refreshToken });
    return response.data;
};
