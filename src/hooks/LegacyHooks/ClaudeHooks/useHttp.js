import { useState, useCallback } from 'react';

export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = useCallback(async (url, options = {}) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(url, {
        headers: { 'Content-Type': 'application/json', ...options.headers },
        ...options
      });
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      const data = await response.json();
      setLoading(false);
      return { data, error: null };
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Unknown error';
      setError(message);
      setLoading(false);
      return { data: null, error: message };
    }
  }, []);

  return { loading, error, request };
};

export default useHttp;
