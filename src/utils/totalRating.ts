import { UserReviewType } from './types';

const totalRating = (reviews: UserReviewType[]) => {
  const ratings = reviews.map((review) => review.rating);
  const accumulatedRatings = ratings.reduce((acc, cur) => {
    if (acc && cur) {
      const sum = acc + cur;
      return sum;
    }
    return cur;
  }, 0);

  return accumulatedRatings / reviews.length;
};

export default totalRating;
