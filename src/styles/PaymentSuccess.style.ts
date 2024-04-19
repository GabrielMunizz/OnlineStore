import styled from 'styled-components';

export const OrderDetailsContent = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;  
  font-family: 'Dosis', sans-serif;

  & button {
    margin-top: 2rem;
    width: 170px;
    height: 3rem;
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #068FFF;

  & img {
    width: 150px;
    margin: 1rem;
  }

  @media (min-width: 1280px) {
    & img {
      width: 200px;
    }
  }
`;

export const OrderDetailsContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  padding: 1rem;  
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
  border-radius: 7px;
  margin-top: 2rem;

  @media (min-width: 320px) {
    width: 80%;
  }

  @media (min-width: 768px) {
    width: 60%;
  }

  @media (min-width: 1280px) {
    width: 40%;
  }
`;

export const AdressAndPayment = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  & h3 {
    border-bottom: 1px solid #000;
    width: fit-content;
  }

  & .payingMethod {
    display: inline;
    margin-left: 0.5rem;
  }

  & .conditionaMessage {
    margin: 0.5rem;
    text-decoration: underline;
  }

  & .pixModalBtn {
    border: none;
    background-color: transparent;
    font-size: 0.8rem;
    text-decoration: underline;
    margin: -1rem;

    &:hover {
      cursor: pointer;
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const OrderDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
