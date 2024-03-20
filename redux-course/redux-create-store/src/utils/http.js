import axios from "axios";

const taskHttp = axios.create({
    baseURL: "http://localhost:5000/api",
});

export default taskHttp;
