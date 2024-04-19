import { getLoggedUser } from '../../utils/userFunctions';
import { UserReviewType, UserType } from '../../utils/types';
import StarRatingViewer from './StarRatingViewer';
import { Button } from '../../styles/Button.style';

type ReviewsProps = {
  userReview: UserReviewType,
  setReviewCount: React.Dispatch<React.SetStateAction<number>>
};

function Reviews({ userReview, setReviewCount }: ReviewsProps) {
  const { userName, createdAt, rating, productReview, reviewID } = userReview;

  const handleDeleteReview = (ID: string) => {
    const reviewExists = localStorage.getItem('reviews');
    if (reviewExists) {
      const loadReviews = JSON.parse(reviewExists) as UserReviewType[];
      const filterReviews = loadReviews.filter((reviews) => reviews.reviewID !== ID);

      localStorage.setItem('reviews', JSON.stringify(filterReviews));

      return setReviewCount((prev) => prev as number - 1);
    }
  };

  const user = getLoggedUser() as UserType;

  return (
    <section>
      <h5>{`${userName} ${createdAt} avaliou:`}</h5>
      <div>
        <StarRatingViewer rating={ rating } />
        <p aria-label="userReviewTxt">
          {productReview}
        </p>
      </div>
      {user.userName === userName && (
        <div>
          <Button
            aria-label="deleteReviewBtn"
            className="deleteReview"
            onClick={ () => handleDeleteReview(reviewID) }
          >
            Apagar review
          </Button>
        </div>
      )}
    </section>
  );
}

export default Reviews;
