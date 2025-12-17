import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    try {
      const stored = window.localStorage.getItem(key);
      return stored ? JSON.parse(stored) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setStoredValue = (newValue) => {
    setValue(newValue);
    try {
      window.localStorage.setItem(key, JSON.stringify(newValue));
    } catch {
      // ignore write errors (e.g., storage quota)
    }
  };

  return [value, setStoredValue];
};

export default useLocalStorage;
