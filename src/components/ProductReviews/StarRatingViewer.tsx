import { FaStar } from 'react-icons/fa6';
import { getStarColor } from '../../utils/getters';

type StarViewerType = {
  rating: number,
};

function StarRatingViewer({ rating }: StarViewerType) {
  return (
    <>
      {[...Array(5)].map((_star, index) => {
        const currentRate = index + 1;
        const starColor = getStarColor(currentRate, rating);
        return (
          <label key={ index }>
            <input
              type="radio"
              name="rate"
              style={ { display: 'none' } }
              value={ currentRate }
            />
            <FaStar
              size={ 20 }
              color={ starColor }
            />
          </label>
        );
      })}

    </>

  );
}

export default StarRatingViewer;
