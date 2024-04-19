import { useState } from 'react';

const useIndex = (pictures: { id: string, url: string }[]) => {
  const [index, setIndex] = useState(0);
  const handleNext = () => {
    if (index < (pictures.length - 1)) {
      setIndex((prev) => prev + 1);
    } else {
      setIndex(0);
    }
  };

  const handlePrevious = () => {
    if (index > 0) {
      setIndex((prev) => prev - 1);
    } else {
      setIndex(pictures.length - 1);
    }
  };

  return {
    handleNext,
    handlePrevious,
    index,
  };
};

export default useIndex;
