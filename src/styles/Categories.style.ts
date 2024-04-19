import styled from 'styled-components';

export const Categories = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 5px;

  & button {
    background-color: transparent;
    border: none;
    margin: 5px;
    transition: 0.3s ease;
    font-family: 'Dosis', sans-serif;
    font-size: 16px;
  }

  & button:hover {
    cursor: pointer;
    transform: scale(1.05);
    border-bottom: 1px solid #000;
  }

  @media (min-width: 320px) {
    width: 100%;
    align-items: center;
    border: none;
    align-items: flex-start;

    & button {
      font-size: 1rem;
    }

    & .allCategoriesBtn {
      margin-top: 0.5rem;
    }
  }

  @media (min-width: 768px) {
    align-items: flex-start;
    width: 14rem;
    border-right: 1px solid black;

    & .allCategoriesBtn {
      margin-top: 2.1rem;
    }
  }
  
`;
