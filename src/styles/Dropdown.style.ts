import styled from 'styled-components';

export const DropDown = styled.div`
  position: relative;  

  .menuBtn {
    border: none;
    background-color: transparent;
    font-size: 2rem;
    color: #fff;
    margin-top: -5px;
  }

  & .menuBtn:hover {
    cursor: pointer;
  }

  & .active + .dropdownMenu {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  }

  & .active {
    color: #000;
  }
`;

export const DropDownMenu = styled.div`
  position: absolute;  
  left: 20%;
  top: 80%;
  padding: 1rem;
  background-color: #fff;
  border-radius: 7px;
  z-index: 5;
  width: 18rem;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
  opacity: 0;
  pointer-events: none;
  transform: translateY(-10px);
  transition: opacity 150ms ease-in-out, transform 150ms ease-in-out;

  & hr {
    color: #000;
    width: 10rem;
  }

  .dropdownElements {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }

  .cartOption {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .cartOption a {
    text-decoration: none;
    color: #000;    
  }

  @media (min-width: 768px) {
    .mobileCategories,
    .categoriesDivisor {
      display: none;
    }
  }
`;

export const CartDropDownMenu = styled.div`
  position: absolute;
  right: 20%;
  top: 80%;
  padding: 1rem;
  background-color: #fff;
  border-radius: 7px;
  z-index: 5;
  width: 18rem;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
  opacity: 0;
  pointer-events: none;
  transform: translateY(-10px);
  transition: opacity 150ms ease-in-out, transform 150ms ease-in-out;

  .cartOption {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
  
  .cartOption a {
    text-decoration: none;
    color: #000;
  }
`;
