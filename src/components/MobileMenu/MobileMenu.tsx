import { useContext } from 'react';
import { RiMenu2Fill } from 'react-icons/ri';
import DropDownMenu from '../DropDown/DropDownMenu';
import * as S from '../../styles/Dropdown.style';
import OnlineStoreContext from '../../context/OnlineStoreContext';

function MobileMenu() {
  const { isOpen, setIsOpen } = useContext(OnlineStoreContext);

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <S.DropDown>
      <button
        aria-label="mobileMenuBtn"
        onClick={ handleOpen }
        className={ `menuBtn ${isOpen ? 'active' : ''}` }
      >
        <RiMenu2Fill />
      </button>
      <DropDownMenu />
    </S.DropDown>
  );
}

export default MobileMenu;
