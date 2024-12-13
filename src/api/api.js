import axios from "axios";

const api = axios.create({
    baseURL : 'https://mondial-lp17.vercel.app/api'
})

export default api