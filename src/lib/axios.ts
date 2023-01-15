import Axios, { AxiosRequestConfig } from "axios";
import { apiUrl } from "../utils/constants/api-url";

export type AxiosResponse = {
  message: string;
  error: string;
  data: any;
};

const axios = Axios.create({
  baseURL: apiUrl,
});

axios.interceptors.response.use(
  (response) => response.data,
  ({ response }) => Promise.reject(response.data)
);

export default axios;
