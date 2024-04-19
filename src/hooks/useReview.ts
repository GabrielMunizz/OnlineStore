import { useContext, useState } from 'react';
import { getLoggedUser } from '../utils/userFunctions';
import OnlineStoreContext from '../context/OnlineStoreContext';
import { UserReviewType, UserType } from '../utils/types';

const useReview = (id: string) => {
  const [review, setReview] = useState<string | undefined>(undefined);
  const [wantReview, setWantReview] = useState(false);
  const [textAreaValues, setTextAreaValues] = useState('');
  const { rating, setRating } = useContext(OnlineStoreContext);
  const date = new Date();
  const now = `(${date.getDate()}/${date.getMonth()}/${date.getFullYear()})`;
  const user = getLoggedUser() as UserType;
  const generateID = `#R${Math.floor(Math.random() * 1001)}`;

  const saveReview = {
    productID: id,
    userName: user?.userName,
    rating,
    productReview: review,
    createdAt: now,
    reviewID: generateID,
  };

  const handleTextArea = ({ target }: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = target;
    setTextAreaValues(value);
  };

  const handleReview = () => {
    setReview(textAreaValues);
    setTextAreaValues('');
    setWantReview(false);
  };

  const handleSaveReview = () => {
    const reviewExists = localStorage.getItem('reviews');
    if (reviewExists) {
      const loadReview = JSON.parse(reviewExists) as UserReviewType[];
      if (saveReview.productReview !== undefined && saveReview.rating !== 0) {
        localStorage
          .setItem('reviews', JSON.stringify([...loadReview, saveReview]));
        setRating(0);
        return setReview(undefined);
      }

      return localStorage.setItem('reviews', JSON.stringify(loadReview));
    }
    return localStorage.setItem('reviews', JSON.stringify([]));
  };

  handleSaveReview();

  const getReview = () => {
    const reviewExists = localStorage.getItem('reviews');
    if (reviewExists) {
      const loadReviews = JSON.parse(reviewExists) as UserReviewType[];
      const findReview = loadReviews
        .filter((userReview) => userReview.productID === id) as UserReviewType[];
      return findReview;
    }
    return [];
  };

  return {
    wantReview,
    textAreaValues,
    handleReview,
    handleTextArea,
    setWantReview,
    handleSaveReview,
    getReview,
  };
};

export default useReview;
