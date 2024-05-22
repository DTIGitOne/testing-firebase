import axios from "axios";

export const axiosInstance = axios.create({
   baseURL: "https://fakerestapi.azurewebsites.net/api/v1/"
});