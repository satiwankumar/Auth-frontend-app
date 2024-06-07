import axios from "axios";
import store from "../store/store";
import { logout } from "../store/reducers/authReducer/authslice";

const api = axios.create({
  // baseURL: 'http://dev74.onlinetestingserver.com:5009/api',
  baseURL: "http://localhost:3000/api",

  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response.status === 401) {
      store.dispatch(logout());
    }
    return Promise.reject(err);
  }
);

api.interceptors.request.use(
  (config) => {
    // document.querySelector(".spinner-container").style.display = "block";
    return config;
  },
  (error) => {
    // document.querySelector(".spinner-container").style.display = "none";
    return Promise.reject(error);
  }
);

// Add a response interceptor
api.interceptors.response.use(
  (response) => {
    // document.querySelector(".spinner-container").style.display = "none";
    return response;
  },
  (error) => {
    // document.querySelector(".spinner-container").style.display = "none";
    return Promise.reject(error);
  }
);

export default api;
