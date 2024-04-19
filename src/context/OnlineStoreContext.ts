import { createContext } from 'react';

export type OnlineStoreContextType = {
  setCategoryID: React.Dispatch<React.SetStateAction<string>>,
  setQuery: React.Dispatch<React.SetStateAction<string>>,
  setRating: React.Dispatch<React.SetStateAction<number>>,
  setCategoryName: React.Dispatch<React.SetStateAction<string>>,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
  isOpen: boolean,
  categoryName: string,
  rating: number,
  categoryID: string,
  query: string,
};

const OnlineStoreContext = createContext({} as OnlineStoreContextType);

export default OnlineStoreContext;
