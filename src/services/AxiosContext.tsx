import React, { createContext, useEffect, useRef } from 'react';
import axios, { AxiosInstance } from 'axios';

type AxiosInstanceProps = {
  children: React.ReactNode;
};

export const AxiosContext = createContext<AxiosInstance | null>(null);

export const AxiosInstanceProvider = (props: AxiosInstanceProps) => {
  const instanceRef = useRef(
    axios.create({
      baseURL: process.env.REACT_APP_SERVER_API_URL,
    })
  );

  useEffect(() => {
    instanceRef.current.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response) {
          return Promise.reject(error);
        }
      }
    );
  }, []);

  return (
    <AxiosContext.Provider value={instanceRef.current}>
      {props.children}
    </AxiosContext.Provider>
  );
};
