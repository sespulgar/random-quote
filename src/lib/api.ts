import axios, {
    type AxiosError,
    type AxiosResponse,
    type InternalAxiosRequestConfig,
    type AxiosInstance, 
    type AxiosRequestConfig
  } from 'axios';

const axiosRequestConfig: AxiosRequestConfig = {
    baseURL: `${import.meta.env.VITE_API_ENDPOINT}`,
    responseType: 'json',
    headers: {
      'Content-Type': 'application/json',
    },
  };

export const api: AxiosInstance = axios.create(axiosRequestConfig);
