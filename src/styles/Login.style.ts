import styled from 'styled-components';

export const LoginContent = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #068fff;
  height: 100vh;
  font-family: 'Dosis', sans-serif;
  font-size: 1.2rem;

  & header {
    display: flex;
    justify-content: center;    
    width: 100%;
    margin: 1rem;
  }

  & header img {
    width: 200px;
  }

  & div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 5px;
    height: 25rem;
    width: 20rem;
  }

  & input {
    height: 1.3rem;
    width: 15rem;
  }

  & label {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 1.5rem;
    margin: 1rem;
  }

  & button {
    width: 120px;
    height: 3rem;
    font-size: 1rem;
  }

  & button:disabled {
    background-color: lightgray;
    cursor: default;
  }
`;
