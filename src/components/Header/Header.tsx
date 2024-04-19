import * as S from '../../styles/Header.style';
import LoginChecker from '../LoginChecker/LoginChecker';
import CartAndSearch from '../CartAndSearch/CartAndSearch';
import MobileHeader from './MobileHeader';
import logo from '../../images/O.png';

function Header() {
  return (
    <S.Header>
      <div className="defaultHeader">
        <LoginChecker />
        <img className="logo" src={ logo } alt="" />
        <CartAndSearch />
      </div>
      <MobileHeader />
    </S.Header>
  );
}

export default Header;
