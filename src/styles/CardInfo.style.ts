import styled from 'styled-components';

export const CardInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 5rem;

  & div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  & img {
    width: 20px;
    height: 20px;
    object-fit: cover;
    margin-left: 0.5rem;
  }

  & label {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  & .expiration {
    width: 5rem;
  }

  & .cvc {
    width: 2rem;
  }
`;

export const CardBrandsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  & img {
    width: 45px;
    height: 35px;
    margin: 0.2rem;
  }
`;
