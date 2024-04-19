import styled from 'styled-components';

export const MobileAside = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 90%;
  padding: 0 1rem;  

  & .buttonsContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 3rem;
    width: 100%;    
  }

  & button {
    width: 8rem;
    height: 2.5rem;
  }
`;
