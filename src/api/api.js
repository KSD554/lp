import axios from "axios";

const api = axios.create({
    baseURL : 'https://lp-bay.vercel.app/api'
})

export default api