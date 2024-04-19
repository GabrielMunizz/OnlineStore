/* eslint-disable max-lines */
import styled from 'styled-components';

export const Cart = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  background-color: #068fff;
  font-family: 'Dosis', sans-serif;
  height: 100%;
  width: 100%;

  & .content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    background-color: #eeeeee;
  }

  & header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    
  }

  & header img {
    width: 150px;
    margin: 1rem 0;   
  }
  
  & .cartIcon {
    font-size: 3.5rem;
    margin-left: 1rem;
    color: #fff;
  }

  & .backToHomeBtn,
  .checkoutBtn {
    width: 10rem;
    height: 3rem;
    font-size: 1rem;
    font-family: 'Dosis', sans-serif;
    background-color: #4e4feb;
    margin-bottom: 1rem;

    &:hover {
      background-color: #4e2feb;
    }
  }

  & .checkoutBtn:hover {
    background-color: #008000;
  }

  @media (min-width: 320px) {
    
    & .cartDropContainer {
      opacity: 1;
      pointer-events: auto;
    }
    & .loginCheckerContainer {
      display: none;
    }
  }

  @media (min-width: 768px) {
    & header {
      width: 95%;
    }
  }

  @media (min-width: 1280px) {
    & .cartDropContainer {
      width: 10%;
      
    }
    & .fill {
      display: none;
    }
    & .content {
      min-height: 100vh;      
    }

    & header {      
      width: 90%;      
    }

    & header img {
      width: 200px;      
    }
    & .cartDropContainer {
      opacity: 0;
      pointer-events: none;
    }
    & .loginCheckerContainer {
      display: flex;
    }
  }
`;

export const CartProducts = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ProductContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
`;

export const TotalAside = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
  height: 12rem;
  border-radius: 7px;

  & .total {
    font-size: 1.8rem;
    margin-top: -1rem;
  }

  & .quantity {
    width: 90%;
    border-bottom: 1px solid #000;
    padding-bottom: 2rem;
  }

  @media (min-width: 320px) {
    display: none;
  }

  @media (min-width: 1280px) {
    display: flex;
    width: 35%;

    .total {
      font-size: 1.5rem;
    }
  }

  @media (min-width: 2400px) {
    width: 30%;    
  }
`;

export const EmptyCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
  border-radius: 7px;
  width: 20rem;
  height: 20rem;
  font-size: 2rem;
  margin-top: 5rem;

  & i {
    font-size: 5rem;
  }
`;

export const ProductsAndAside = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 80%;
  margin-top: 1.5rem;  

  @media (min-width: 320px) {
    justify-content: center;
  }

  @media (min-width: 768px) {
    width: 95%;
  }

  @media (min-width: 1280px) {
    justify-content: space-between;
    width: 80%;
  }

  @media (min-width: 2400px) {
    justify-content: space-around;
    width: 50%;
  }
`;
