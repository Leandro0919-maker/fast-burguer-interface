import axios from "axios";

export const api = axios.create({
    baseURL: 'http://localhost:3001',
});

api.interceptors.request.use((config) => {
    const userData = localStorage.getItem('fastburguer:userData');

    const token = userData && JSON.parse(userData).token;

    console.log('INTERCEPTOR: O token encontrado foi:', token); 
    
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
})