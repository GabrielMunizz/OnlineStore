import { useParams } from 'react-router-dom';
import { useContext, useState } from 'react';
import useReview from '../../hooks/useReview';

import { getLoggedUser } from '../../utils/userFunctions';
import { UserReviewType, UserType } from '../../utils/types';
import totalRating from '../../utils/totalRating';
import OnlineStoreContext from '../../context/OnlineStoreContext';
import alertGenerator from '../../utils/alertGenerator';

import Rate from './Rate';
import ReviewHandler from './ReviewHandler';
import Reviews from './Reviews';
import * as S from '../../styles/Products.style';

function ProductReviews() {
  const { id } = useParams();
  const { setRating } = useContext(OnlineStoreContext);

  const {
    wantReview,
    textAreaValues,
    handleReview,
    handleTextArea,
    setWantReview,
    getReview,
  } = useReview(id as string);

  const userReview = getReview();

  const totalScore = totalRating(userReview as UserReviewType[]);

  const [reviewCount, setReviewCount] = useState(userReview.length as number);

  const user = getLoggedUser() as UserType;

  const validateUser = () => {
    if (user?.logged) {
      setWantReview((prev) => !prev);
    } else {
      const error = 'error';
      const title = 'Você precisa estar logado para avaliar';
      alertGenerator(error, title);
    }
  };

  const rateHandlers = {
    reviewCount,
    totalScore,
    validateUser,
    wantReview,
  };

  const reviewHandlers = {
    wantReview,
    textAreaValues,
    handleTextArea,
    handleReview,
    setWantReview,
    setReviewCount,
    setRating,
  };

  return (
    <S.ProductReview>
      <Rate handlers={ rateHandlers } />

      {userReview.length > 0 && (
        <>
          <h3>
            Avaliações de usuários:
          </h3>
          {userReview
            .map((productReview, i) => (
              <Reviews
                key={ i }
                userReview={ productReview }
                setReviewCount={ setReviewCount }
              />))}
        </>

      )}
      <ReviewHandler handlers={ reviewHandlers } />
    </S.ProductReview>
  );
}

export default ProductReviews;
