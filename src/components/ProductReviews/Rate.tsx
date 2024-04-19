import { Button } from '../../styles/Button.style';
import * as S from '../../styles/Products.style';
import StarRatingViewer from './StarRatingViewer';

type RateProps = {
  handlers: {
    reviewCount: number | undefined,
    totalScore: number,
    validateUser: () => void,
    wantReview: boolean,
  }
};

function Rate({ handlers }: RateProps) {
  const { reviewCount, totalScore, validateUser, wantReview } = handlers;
  return (
    <>
      <S.TotalRatingContainer>
        {reviewCount === 0 ? (
          <h3 aria-label="noReviewDefaultMessage">
            Não possui avaliações. Seja o primeiro a avaliar!
          </h3>
        ) : (
          <>
            <h3>{`Nota geral(${reviewCount}): ${totalScore?.toFixed(1)}`}</h3>
            <StarRatingViewer rating={ Math.floor(totalScore) } />
          </>
        )}
      </S.TotalRatingContainer>
      <Button
        aria-label="reviewBtn"
        onClick={ validateUser }
        className="reviewBtn"
        style={ wantReview ? { display: 'none' } : { display: 'block' } }
      >
        Avaliar

      </Button>
    </>
  );
}

export default Rate;
