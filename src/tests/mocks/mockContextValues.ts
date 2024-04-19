import { vi } from 'vitest';

const mockContextValues = {
  categoryID: '',
  setCategoryID: vi.fn(),
  query: '',
  setQuery: vi.fn(),
  isOpen: false,
  setIsOpen: vi.fn(),
  rating: 5,
  setRating: vi.fn(),
  categoryName: '',
  setCategoryName: vi.fn(),
};

export default mockContextValues;
