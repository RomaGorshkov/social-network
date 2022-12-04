import axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "76e83c2b-e96b-4c7f-8f52-d21bb247b507",
  }
});

export default instance;
