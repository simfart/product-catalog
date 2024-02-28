import axios from "axios";
import md5 from "md5";

const BASEURL = "http://api.valantis.store:40000/";
const PASSWORD = "Valantis";
const timestamp = new Date().toISOString().split("T")[0].replace(/-/g, "");

const api = axios.create({
  baseURL: BASEURL,
  headers: { "X-Auth": md5(`${PASSWORD}_${timestamp}`) },
});

export const getProducts = async () =>
  await api
    .post("/", {
      action: "get_ids",
      params: { offset: 10, limit: 3 },
    })
    .then((res) => res.data)
    .then((res) => console.log(res))
    .catch(function (error) {
      console.log(error);
    });

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
    }

    return Promise.reject(error);
  }
);
