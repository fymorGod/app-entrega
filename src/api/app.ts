import axios from "axios";

export const api = axios.create({
    baseURL: "http://192.168.102.14:8080/api/v1",
    timeout: 40000
  });