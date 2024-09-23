import axiosInstance from "./axiosInstance";

const handleLogin = async (email, password) => {
    try{
        const response = await axiosInstance.post('/auth/login', {
            email,
            password,
        });
        console.log('Login successful: ', response.data);
        return response 
    } catch(error) {
        console.error('Error login in: ', error);
    }
}

const fetchDashboardData = async () => {
    try {
        const response = await axiosInstance.get('/dashboard');
        console.log('Dashboard data:', response.data);
    } catch (error) {
        console.error('Error fetching dashboard data: ', error);
    }
}

const handleRegistration = async (adminData) => {
    try {
        const response = await axiosInstance.post('/auth/register', adminData);
        console.log('Registration successful:', response.data);
    } catch (error) {
        console.error('Error during registration:', error.response ? error.response.data : error.message)
    }
}

export {
    handleLogin,
    fetchDashboardData,
    handleRegistration
};