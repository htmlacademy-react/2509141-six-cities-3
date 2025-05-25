import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { StatusCodes } from 'http-status-codes';
import { toast } from 'react-toastify';
import { getToken } from './token';


type Detail = {
  messages: string[];
  property: string;
  value: string;
}

type DetailMessageType = {
  errorType: string;
  message: string;
  details: Detail[];
}

const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.UNAUTHORIZED]: false,
  [StatusCodes.NOT_FOUND]: false
};

const shouldDisplayError = (response: AxiosResponse) =>
  (response.config.method === 'post') || !!StatusCodeMapping[response.status];


const BACKEND_URL = 'https://15.design.htmlacademy.pro/six-cities';
const REQUEST_TIMEOUT = 5000;


export const createAPI = () => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers['x-token'] = token;
      }

      return config;
    }
  );

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<DetailMessageType>) => {
      if (error.response && shouldDisplayError(error.response)) {
        const data = (error.response.data);
        const message = data.errorType === 'VALIDATION_ERROR'
          ? data.details[0].messages[0]
          : data.message;

        toast.warn(message);
      }

      throw error;
    }
  );


  return api;
};
