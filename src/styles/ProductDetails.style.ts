import styled from 'styled-components';

export const ProductDetailsContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  & header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    background-color: #068fff;
    margin-bottom: 2rem;
  }

  & header img {
    width: 150px;
    margin: 1rem;    
  }

  & .cartBtnContainer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  & .defaultHeaderContainer {
    display: none;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%; 
  }

  & .defaultHeaderContainer img {
    transform: translateX(-5rem);
  }

  & .mobileHeaderContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;    
    align-items: center;
    padding: 0 1rem;
    width: 100%;
  }

  & .filler {    
    width: 10%;   
    margin: 0 0.5rem;
  }

  @media (min-width: 1280px) {
    & .defaultHeaderContainer {
      display: flex;
    }

    & .mobileHeaderContainer {
      display: none;
    }

    & header img {
      width: 200px;
    }
  }
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
  border-radius: 7px;
  background-color: #fff;
  padding: 1rem;
  font-family: 'Dosis', sans-serif;
  margin-bottom: 2rem;

  & .title {
    font-size: 1.3rem;
  }

  & .infoContent {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin-bottom: 1.5rem;

    & p {
      font-size: 1.2rem;
    }
  }

  & .picturesContainer {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    border-radius: 7px;
  }

  & .picturesContainer img {
    width: 75px;
    height: 125px;
  }

  & .addToCartBtn,
  .homeBtn {
    width: 170px;
    height: 3rem;
    font-size: 1rem;
  }

  & .prevBtn,
  .nextBtn {
    background-color: transparent;
    border: none;
    font-size: 30px;

    &:hover {
      cursor: pointer;
    }
  }

  @media (min-width: 1280px) {
    & .title {
      font-size: 1.5rem;
    }

    & .infoContent {
      flex-direction: row;
    }

    & .picturesContainer img {
      width: 200px;
      height: 400px;
    }

    & .picturesContainer img {
      width: 150px;
      height: 300px;
    }
  }

  @media (min-width: 2400px) {
    width: 35%;
  }
`;

export const InfoAndBtns = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  & .btnsContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    height: 7rem;
    margin-top: 1rem;
  }

  & .btnsContainer button {
    margin: 0;
  }

  & p {
    margin: 0.5rem;
  }

  & h2 {
    font-size: 1.3rem;
  }

  @media (min-width: 1280px) {
    padding: 0 3rem;
    width: 25rem;

    & .btnsContainer {
      flex-direction: row;
    }

    & h2 {
      font-size: 1.5rem;
    }
  }
`;
