import { useState, useContext, useMemo, useRef, useEffect } from 'react'
import axios from 'axios';

import { AxiosContext } from './AxiosContext';

export const useAxios = (url: string, method: string, payload?: any) => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);
  const contextInstance = useContext(AxiosContext);
  const instance = useMemo(() => {
    return contextInstance || axios;
  }, [contextInstance]);
  const controllerRef = useRef(new AbortController());
  const cancel = () => {
    controllerRef.current.abort();
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await instance.request({
          signal: controllerRef.current.signal,
          data: payload ?? {},
          method,
          url,
        });

        setData(response.data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoaded(true);
      }
    })();
  }, []);

  return { cancel, data, error, loaded };
};