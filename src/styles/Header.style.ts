import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  background-color: #068fff;
  font-family: 'Dosis', sans-serif; 

  & .logo {
    width: 150px;
    margin: 1rem 0;      
  }

  & .cartContainer {
    position: relative;
  }

  & .cartAndSearch {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 25rem;
  }

  & .cartContainer a {
    font-size: 2rem;
    text-decoration: none;
    color: #fff;
    transform: translateY(2.5px);
    margin-right: 0.8rem;
  }

  & .quantityCounter {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 12px;
    width: 12px;
    position: absolute;
    top: 0.9rem;
    left: 1.2rem;
    background-color: red;
    color: #fff;
    border-radius: 50%;
    font-size: 0.7rem;
    padding: 0.2rem;
    font-family: sans-serif;
  }

  & .userName {
    color: #fff;
  }

  & .logoutBtn {
    border: none;
    border-radius: 5px;
    background-color: crimson;
    color: #fff;
    width: 4rem;
    height: 1.2rem;
    margin-left: 1rem;
    transition: 0.3s ease;
    font-family: 'Dosis', sans-serif;

    &:hover {
      cursor: pointer;
      background-color: #cc1839;
    }
  }

  & .categoryAndCart {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 60px;
  }

  & .categoryContainer {
    font-size: 0.8rem;
    height: 1rem;
    margin-top: -5px;
  }  

  @media (min-width: 320px) {    

    & .defaultHeader {
      display: none;
    }

    & .userName {
      color: #068fff;
    }

    & .cartIcon {
      color: #000;
    }

    & .headerLogin {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    }

    & .nameAndButtonContainer {
      height: 2rem;
      margin-top: -1rem;
    }

    & .searchBtn {
      width: 4rem;
    }

    & .searchInput {
      border: none;
      border-radius: 2px;
    }
  }

  @media (min-width: 375px) {
    & .content {
      width: 90%;
    }

    & .searchBtn {
      width: 5rem;
    }
  }

  @media (min-width: 768px) {
    & .categoryAndCart input {
      width: 8rem;
    }

    & .logoutBtn {
      margin-left: 0.2rem;
    }
  }

  @media (min-width: 1280px) {
    & .logo {
      width: 200px;      
    }

    & .userName {
      color: #fff;
    }

    & .defaultHeader {
      display: flex;
      width: 90%;
      justify-content: space-between;
      align-items: center;          
    }  

    & .defaultHeader img {
      transform: translateX(17%);
    }
  }

  @media (min-width: 2400px) {
    & .searchInput {
      min-width: 15rem;
      height: 1.2rem;
    }
  }
`;
