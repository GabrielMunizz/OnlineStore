import styled from 'styled-components';

export const PayingMethodContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;

  & .selectContainer {
    padding: 0 1.2rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;  
  padding: 1rem 0;

  & .checkoutBtns {
    font-size: 0.9rem;
    width: 120px;
    height: 2rem;
    margin: 0;    
  }

  & .finish:hover {
    background-color: #008000; 
  }

`;
