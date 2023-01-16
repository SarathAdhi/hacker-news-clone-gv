import Axios from "axios";

export type AxiosResponse = {
  message: string;
  error: string;
  data: any;
};

const axios = Axios.create({
  baseURL: "http://hn.algolia.com/api/v1",
});

axios.interceptors.response.use(
  (response) => response.data,
  ({ response }) => Promise.reject(response.data)
);

export default axios;
