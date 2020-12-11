import axios, { AxiosResponse } from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_baseAPIURL,
  withCredentials: true,
});

type HelloResponse = {
  hello: string;
};

export const sendName = (
  name: string
): Promise<AxiosResponse<HelloResponse>> => {
  return axiosInstance.get<HelloResponse>(`hello/${name}`);
};

type UserPayload = {
  email: string;
  username: string;
};

export const getUser = (email: string): Promise<AxiosResponse<UserPayload>> => {
  return axiosInstance.get<UserPayload>(`/api/user/${email}`);
};

export const postUser = (
  user: UserPayload
): Promise<AxiosResponse<UserPayload>> => {
  return axiosInstance.post<UserPayload>('/api/user', user);
};
