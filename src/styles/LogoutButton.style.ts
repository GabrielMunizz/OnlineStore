import styled from 'styled-components';

export const LogoutButton = styled.button`
   border: none;
    border-radius: 4px;
    background-color: crimson;
    color: #fff;
    width: 5rem;
    height: 1.8rem;
    transition: 0.3s ease;
    font-family: 'Dosis', sans-serif;

    &:hover {
      cursor: pointer;
      background-color: #cc1839;
    }

    @media (min-width: 320px) {
      width: 3.2rem;
      height: 1.5rem;
  }

  @media (min-width: 1280px) {
    width: 5rem;
    height: 1.8rem;
  }
`;
