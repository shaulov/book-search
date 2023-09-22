import axios, { type AxiosInstance, type AxiosError } from "axios";

const BACKEND_URL = 'https://www.googleapis.com/books/v1';
const REQUEST_TIMEOUT = 5000;

export const createApi = (): AxiosInstance => { 
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      console.log(error);
      throw error;
    }
  );

  return api;
}