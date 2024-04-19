import styled from 'styled-components';

export const MobileHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;  

  & img {
    width: 100px;
    margin-bottom: 0.6rem;    
  }

  & .content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    width: 90%;
  }

  & .searchAndCategory {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    height: 2.5rem;
  }  

  @media (min-width: 320px) {
    & .content {
      width: 100%;
    }
  }

  @media (min-width: 768px) {
    & .content {
      margin-top: 1rem;
      width: 80%;
  }
  }

  @media (min-width: 1280px) {
    display: none;
  }
`;
