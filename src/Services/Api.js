import axios from "axios";

export const Api = axios.create ({
  baseURL: 'http://localhost/api',
  timeout: 8000,
})