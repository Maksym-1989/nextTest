import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setValue] = useState(
    typeof window !== "undefined" && localStorage.getItem(key)
      ? JSON.parse(localStorage.getItem(key))
      : initialValue
  );

  const setStoredValue = (value) => {
    setValue(value);
    localStorage.setItem(key, JSON.stringify(value));
  };
  return [storedValue, setStoredValue];
};

export default useLocalStorage;
