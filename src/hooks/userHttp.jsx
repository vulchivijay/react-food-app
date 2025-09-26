import { useState, useEffect, useCallback } from 'react';

async function sendHttpRequest(url, options) {
  const response = await fetch(url, options);
  const data = await response.json();
  if (!response.ok) {
    throw new Error(
      data.message || 'Network response was not ok'
    );
  }
  return data;
}

export default function useHttp(url, config, initialData) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(initialData);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(
    async function sendRequest(data) {
      setIsLoading(true);
      try {
        const responseData = await sendHttpRequest(url, {...config, body: data});
        setData(responseData);
      }
      catch (err) {
        setError(err.message || 'Something went wrong!');
      }
      setIsLoading(false);
  }, [url, config]);

  useEffect (() => {
    if (config && (config.method === 'GET' || !config.method) || !config) {
      sendRequest();
    }
  }, []);
  
  return {
    data,
    error,
    isLoading,
    sendRequest,
  };
}