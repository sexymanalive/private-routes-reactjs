import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = window.localStorage.getItem(key);
      if (value) {
        return JSON.parse(value);
      } else {
        window.localStorage.setItem(key, JSON.stringify(initialValue));
        return initialValue;
      }
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (newValue) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(newValue));
    } catch (error) {}

    setStoredValue(newValue);
    return [storedValue, setValue];
  };
};
