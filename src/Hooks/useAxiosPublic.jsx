import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://fashion-server-topaz.vercel.app'
})
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;