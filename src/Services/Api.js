import { Axios } from "axios";

export const Api = axios.create ({
  baseUrl: 'http://localhost/api',
  timeout: 8000,
})