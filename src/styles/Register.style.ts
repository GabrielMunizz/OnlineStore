import styled from 'styled-components';

export const RegisterPage = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  background-color: #068fff;
  height: 100vh;
  color: #fff;

  & header {
    margin: 1rem;
  }

  & header img {
    width: 200px;
  }

  @media (min-width: 320px) {
    height: calc(100vh + 20vh);
  }

  @media (min-width: 768px) {
    height: 100vh;
  }
`;

export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  color: #000;
  border: 1px solid black;
  border-radius: 5px;
  width: 28rem;
  height: 40rem;

  & label {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 1.5rem;
    margin: 1rem;
  }

  & input {
    height: 1.3rem;
    width: 15rem;
  }

  & button {
    width: 120px;
    height: 3rem;
    font-size: 1rem;
    margin: 0.2rem;
  }

  & .cancelBtn {
    background-color: crimson;

    &:hover {
      cursor: pointer;
      background-color: #cc1839;
    }
  }

  @media (min-width: 320px) {
    width: 22rem;   

    & label {
      font-size: 1.3rem;
    }

    & button {
      width: 100px;      
    }
  }

  @media (min-width: 768px) {
    width: 28rem;

    & label {
      font-size: 1.5rem;
    }

    & button {
      width: 120px;      
    }
  }
`;
