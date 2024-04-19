import styled from 'styled-components';

export const WelcomeUser = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  & div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-left: 0.5rem;
  }

  & button {
    margin-left: 0.5rem;
  }

  @media (min-width: 320px) {    
    flex-wrap: wrap;
  }

  @media (min-width: 768px) {
    flex-direction: row; 
  }
`;

export const LoginOrRegister = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;  
  width: 100%; 
  
`;
