import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://real-estate-homes-api.vercel.app/api",
  // baseURL: "http://localhost:8800/api",
  withCredentials: true,
});

export default apiRequest;
