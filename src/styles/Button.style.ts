import styled from 'styled-components';

export const Button = styled.button`
  background-color: #4e4feb;
  color: #fff;
  border: none;
  border-radius: 3px;
  width: 5rem;
  height: 1.3rem;
  margin-left: 0.5rem;
  transition: 0.3s ease;
  font-family: 'Dosis', sans-serif;

  &:hover {
    cursor: pointer;
    background-color: #4e2feb;
  }

  &:disabled {
    cursor: default;
    background-color: gray;
    color: #000;
  }
`;
