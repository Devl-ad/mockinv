import axios from "axios";

export const getRandomNumber = () => {
  return Math.floor(Math.random() * (100 - 10)) + 10;
};

export const BASE_URL = "https://wealthlines.org";
// export const BASE_URL = "http://localhost:8000";
export const axiosPublic = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: false,
  },
});
