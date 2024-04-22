import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from '../Hooks/useAuth';

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})

const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { logOut } = useAuth();
    //request interceptor 
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        config.headers.authorization = `Bearer ${token}`
        console.log('request stopped by interceptors')
        return config;
    }, function (error) {
        return Promise.reject(error);
    }
    );


    //intercepts 401 and 402 status
    axiosSecure.interceptors.response.use(function (response) {
        return response;
    }, async (error) => {
        const status = error.response.status;
        console.log('status error in the interceptors', status);
        if (status === 401 || status === 403) {
            await logOut();
            navigate('/login');
        }
        return Promise.reject(error);
    })


    return axiosSecure;
};

export default useAxiosSecure;