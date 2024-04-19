import CartButton from '../CartButton/CartButton';
import LoginChecker from '../LoginChecker/LoginChecker';
import logo from '../../images/O.png';

function DefaultHeader() {
  return (
    <div className="defaultHeaderContainer">
      <LoginChecker />
      <img src={ logo } alt="logo" />
      <div className="cartBtnContainer">
        <CartButton />
        <p>Meu Carrinho</p>
      </div>
    </div>
  );
}

export default DefaultHeader;
