import axios from 'axios';

const axiosInstance = axios.create({
    // baseURL: 'http://localhost:8000/api',
    baseURL: 'http://52.64.16.26/api',
    withCredentials: true, 
    headers: {
        'Content-Type': 'application/json',
    },
})

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            window.location.href = '/auth/login';
        }
        return Promise.reject(error);
    }
)

export default axiosInstance;