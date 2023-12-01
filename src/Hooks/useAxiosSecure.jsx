import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'https://assignment-12-online-forum-server.vercel.app'
})
const useAxiosSecure = () => {

    return axiosSecure;
};

export default useAxiosSecure;