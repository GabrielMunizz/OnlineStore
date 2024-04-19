import styled from 'styled-components';

export const CartProductCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
  border-radius: 7px;
  background-color: #ffffff;
  width: 30rem;
  margin-bottom: 1rem;

  @media (min-width: 320px) {
    width: 22rem;
  }

  @media (min-width: 768px) {
    width: 30rem;
  }
`;

export const ImageTitlePrice = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1rem;

  & .titleAndPrice {
    width: 70%;
  }

  & h3 {
    word-wrap: break-word;
    text-align: center;
    margin: 0;
  }

  & hr {
    margin-top: 1rem;
  }

  @media (min-width: 320px) {
    & h3 {
      font-size: 1rem;
    }

    & hr {
      width: 60%;
    }
  }

  @media (min-width: 768px) {
    & h3 {
      font-size: 1.2rem;
    }

    & hr {
      width: 100%;
    }
  }
`;

export const QuantityContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: 5rem;

  & .buttonsContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 40%;
    margin-top: 2px;
  }

  & .buttonsContainer button {
    display: flex;
    justify-content: center;    
    align-items: center;
    background-color: transparent;
    color: black;
    font-size: 1.3rem;    
    margin: 1px 1rem;    
  }

  & .totalContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 30%;
  }

  & .totalContainer h3 {
    margin: 0;
  }

  & .productQuantity {
    margin: 0 -1.5rem 0 0.5rem;
    min-width: 2rem;
  }

  & .removeProdBtn {
    width: 100px;
    height: 2rem;
    background-color: crimson;
    margin-right: 0.5rem;
    font-family: 'Dosis', sans-serif;
    margin-top: 0.5rem;

    &:hover {
      background-color: #cc1839;
      cursor: pointer;
    }
  }

  @media (min-width: 320px) {
    margin-top: 1rem;

    & h3 {
      font-size: 1rem;
    }
    & .removeProdBtn {
      width: 80px;
    }

    & .totalContainer {
      margin-right: 0.5rem;
    }
  }

  @media (min-width: 768px) {
    margin-top: 0;
    & h3 {
      font-size: 1.2rem;
    }

    & .removeProdBtn {
      width: 100px;
    }

    & .totalContainer {
      margin: 0;
    }
  }
`;
