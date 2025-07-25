import { useState, useEffect } from "react";

export const useDebounce = (value) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const debouncerTimer = setTimeout(() => {
      setDebouncedValue(value);
    }, 1000);

    return () => {
      clearTimeout(debouncerTimer);
    };
  }, [value]);

  return debouncedValue;
};
