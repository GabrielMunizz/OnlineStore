import styled from 'styled-components';

export const CheckoutPage = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Dosis', sans-serif;
  height: 100%;

  & header {
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: #068FFF;    
    width: 100%;
  }

  & header img {
    width: 150px;
    margin: 1rem;
  }

  & .checkoutContent {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;    
    padding: 3rem;   
  }

  @media (min-width: 1280px) {
    .checkoutContent {
      padding: 0;
    }
  }
`;

export const CheckoutContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const CheckoutProduct = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;  
  width: 18rem;
  background-color: #fff;
  margin-bottom: 0.2rem; 

  & div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 1rem;
    padding: 0.5rem;    
  }
  
  & img {
    width: 30px;
    height: 30px;
    margin-right: 5px;
  }

  & .quantityContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;    
  }  

  & .productTitle {
    font-size: 0.7rem;
    word-wrap: break-word;      
  }

  @media (min-width: 768px) {
    width: 20rem;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
`;

export const BuyerInfoForm = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  width: 90%;  
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
  border-radius: 7px;
  background-color: #fff;

  & label {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  & input,
  select {
    margin: 1rem;
    border-radius: 5px;
    border: none;
    background-color: #eeee;
    height: 1.5rem;
  }
`;

export const PayingMethodContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 20%;

  & aside {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    background-color: #fff;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
    border-radius: 7px;
    width: 20rem;    
    padding: 1rem;
  }

  & hr  {
    width: 60%;
  }

  & label {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  & select {
    margin-top: 0.5rem;
    width: 10rem;
    background-color: #fff;    
    border-radius: 5px;
    font-size: 0.9rem;
    height: 1.5rem;    
  }

  & h3 {
    margin: 0;
  }

  & .textContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    height: 4rem;
    padding: 0 1.2rem;
    margin: 1rem 0;
  }

  @media (min-width: 1280px) {
    width: 25%;    
  }
`;

export const FormAndPayment = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  width: 80%;
`;
