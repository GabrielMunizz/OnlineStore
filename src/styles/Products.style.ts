import styled from 'styled-components';

export const ProductsContainer = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 83%;
  margin-top: 2rem;

  & .homeContent {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 200px;
  }

  @media (min-width: 320px) {
    width: 100%;
    justify-content: center;

    .homeContent h3 {
      font-size: 1rem;
    }

    .homeContent {
      padding: 1rem;
    }

    & .initialMessage {
      transform: translateX(1rem);
    }
  }

  @media (min-width: 768px) {
    width: 82%;
    justify-content: flex-start;
  }

  @media (min-width: 1280px) {
    width: 90%;
    margin: 2rem 0 0 3rem;

    & .initialMessage {
      transform: translateX(-10rem);
    }
  }
`;

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 200px;
  height: 300px;
  margin: 0.5rem;
  transition: 0.3s ease;
  text-align: center;
  padding: 0.5rem;
  font-family: 'Dosis', sans-serif;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);

  & img {
    width: 80px;
    height: 80px;
  }

  & h3 {
    word-wrap: break-word;
    font-size: 15px;
    font-family: 'Dosis', sans-serif;
  }

  & .productCardBtn {
    width: 150px;
    font-family: 'Dosis', sans-serif;
  }

  & .productCardPrice {
    font-size: 17px;
  }
`;

export const TotalRatingContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  & h3 {
    margin-right: 0.8rem;
  }
`;

export const ProductReview = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & textarea {
    resize: none;
    width: 15rem;
    margin-bottom: 1rem;
  }

  & .btnContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  & .reviewBtn,
  .cancelBtn,
  .deleteReview {
    width: 170px;
    height: 3rem;
    font-size: 1rem;
    margin: 0.2rem;
  }

  & .cancelBtn,
  .deleteReview {
    background-color: crimson;
  }

  & .cancelBtn:hover,
  .deleteReview:hover {
    background-color: #cc1839;
  }

  & .reviewAndBtn {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 1280px) {
    & textarea {
      width: 25rem;
      margin: 0;
    }

    & .reviewAndBtn {      
      flex-direction: row;      
    }
  }
`;
