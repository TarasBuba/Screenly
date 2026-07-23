import { useState, useEffect } from 'react';

const useSearchInput = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [debouncedValue, setDebouncedValue] = useState<string>('');

  useEffect(() => {
    const currInterval = setTimeout(() => setDebouncedValue(inputValue), 500);

    return () => clearTimeout(currInterval);
  }, [inputValue]);

  return { inputValue, setInputValue, debouncedValue };
};

export default useSearchInput;
