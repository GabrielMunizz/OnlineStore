import { Link } from 'react-router-dom';
import { useContext } from 'react';
import CartButton from '../CartButton/CartButton';
import LoginChecker from '../LoginChecker/LoginChecker';
import * as S from '../../styles/Dropdown.style';
import Categories from '../Categories/Categories';
import OnlineStoreContext from '../../context/OnlineStoreContext';

function DropDownMenu() {
  const { setIsOpen } = useContext(OnlineStoreContext);

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <S.DropDownMenu className="dropdownMenu ">
      <div
        className="dropdownElements"
      >
        <LoginChecker />
        <hr />
        <div className="cartOption">
          <div>
            <CartButton />
          </div>
          <Link
            onClick={ handleOpen }
            to="/cart"
          >
            Meu Carrinho
          </Link>
        </div>
        <hr className="categoriesDivisor" />
        <div className="mobileCategories">
          <Categories />
        </div>
      </div>
    </S.DropDownMenu>
  );
}

export default DropDownMenu;
