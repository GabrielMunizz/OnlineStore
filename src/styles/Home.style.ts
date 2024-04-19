import styled from 'styled-components';

export const HomeMain = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  background-color: #eeeeee;
  min-height: 210vh;

  @media (min-width: 320px) {
    .desktopCategories {
      display: none;
    }
  }

  @media (min-width: 768px) {
    .desktopCategories {
      display: flex;
    }
  }
`;
