import axios from "axios";

export const getRandomNumber = () => {
  return Math.floor(Math.random() * (100 - 10)) + 10;
};

export const BASE_URL = "http://127.0.0.1:8000";
export const axiosPublic = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: false,
  },
});
