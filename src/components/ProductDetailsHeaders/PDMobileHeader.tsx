/* eslint-disable react/jsx-max-depth */
import { RiMenu3Fill } from 'react-icons/ri';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/O.png';
import LoginChecker from '../LoginChecker/LoginChecker';
import CartButton from '../CartButton/CartButton';
import { DropDown, CartDropDownMenu } from '../../styles/Dropdown.style';

function PDMobileHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className="mobileHeaderContainer">
      <div className="filler" />
      <img src={ logo } alt="logo" />
      <DropDown>
        <button
          aria-label="openMenu"
          onClick={ handleOpen }
          className={ `menuBtn ${isOpen ? 'active' : ''}` }
        >
          <RiMenu3Fill />
        </button>
        <CartDropDownMenu className="dropdownMenu ">
          <div className="dropdownElements">
            <LoginChecker />
            <hr />
            <div className="cartOption">
              <CartButton />
              <Link to="/cart">
                Meu Carrinho
              </Link>
            </div>
          </div>
        </CartDropDownMenu>
      </DropDown>
    </div>
  );
}

export default PDMobileHeader;
