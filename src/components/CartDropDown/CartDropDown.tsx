import { RiMenu3Fill } from 'react-icons/ri';
import { useState } from 'react';
import * as S from '../../styles/Dropdown.style';
import LoginChecker from '../LoginChecker/LoginChecker';
import MobileAside from '../MobileAside/MobileAside';

type CartDropDownProps = {
  productQuantity: number;
  total: string;
  handleCheckout: () => void;
};

function CartDropDown({ productQuantity, total, handleCheckout }: CartDropDownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <S.DropDown>
      <button
        aria-label="menuBtn"
        onClick={ handleOpen }
        className={ `menuBtn ${isOpen ? 'active' : ''}` }
      >
        <RiMenu3Fill />
      </button>
      <S.CartDropDownMenu className="dropdownMenu ">
        <div className="dropdownElements">
          <LoginChecker />
          <hr />
          <MobileAside
            productQuantity={ productQuantity }
            total={ total }
            handleCheckout={ handleCheckout }
          />
        </div>
      </S.CartDropDownMenu>
    </S.DropDown>
  );
}

export default CartDropDown;
