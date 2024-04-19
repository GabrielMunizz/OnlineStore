import { Button } from '../../styles/Button.style';
import StarRating from './StarRating';

type ReviewHandlerProps = {
  handlers: {
    wantReview: boolean;
    textAreaValues: string;
    handleTextArea: ({ target }: React.ChangeEvent<HTMLTextAreaElement>) => void,
    handleReview: () => void,
    setWantReview: React.Dispatch<React.SetStateAction<boolean>>,
    setReviewCount: React.Dispatch<React.SetStateAction<number>>,
    setRating: React.Dispatch<React.SetStateAction<number>>,
  }
};

function ReviewHandler({ handlers }: ReviewHandlerProps) {
  const {
    wantReview,
    textAreaValues,
    handleReview,
    handleTextArea,
    setRating,
    setReviewCount,
    setWantReview,
  } = handlers;

  const handleSubmit = () => {
    handleReview();
    setWantReview(false);
    setReviewCount((prev) => prev as number + 1);
  };

  const handleCancel = () => {
    setWantReview(false);
    setRating(0);
  };

  return (
    <div>
      {wantReview && (
        <>
          <div>
            <StarRating />
          </div>
          <div className="reviewAndBtn">
            <textarea
              aria-label="reviewTextArea"
              cols={ 50 }
              rows={ 7 }
              value={ textAreaValues }
              onChange={ handleTextArea }
            />
            <div className="btnContainer">
              <Button
                aria-label="submitReviewBtn"
                className="reviewBtn"
                onClick={ handleSubmit }
              >
                Postar

              </Button>
              <Button
                aria-label="cancelReviewBtn"
                className="cancelBtn"
                onClick={ handleCancel }
              >
                Cancelar
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ReviewHandler;
