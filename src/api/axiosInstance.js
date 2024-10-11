import axios from "axios";

const axiosInstance = axios.create({
    baseURL: `https://open-fashion-express.vercel.app/api/v1`
});

export default axiosInstance;
