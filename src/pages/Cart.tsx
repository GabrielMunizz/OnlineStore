import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { ReduxType } from '../utils/types';
import CartProducts from '../components/Products/CartProducts';
import CartAside from '../components/CartAside/CartAside';
import EmptyCart from '../components/EmptyCart/Emptycart';
import CartDropDown from '../components/CartDropDown/CartDropDown';

import * as S from '../styles/Cart.style';
import logo from '../images/O.png';

import calculateTotal from '../utils/calculateTotal';
import transformToPrice from '../utils/transformToPrice';
import { getLoggedUser } from '../utils/userFunctions';
import calculateQuantity from '../utils/calculateQuatity';
import alertGenerator from '../utils/alertGenerator';
import LoginChecker from '../components/LoginChecker/LoginChecker';

function Cart() {
  // carrega os produtos salvos na store do Redux, calcula a quantidade e o total;
  const products = useSelector((state: ReduxType) => state.cart);
  const productQuantity = calculateQuantity(products);
  const total = transformToPrice(calculateTotal(products));

  const navigate = useNavigate();

  // carrega as informações do usuário logado no momento;
  const user = getLoggedUser();

  const handleCheckout = () => {
    if (!user || !user?.logged) {
      const title = 'Precisa estar logado para finalizar a compra';
      const error = 'error';
      return alertGenerator(error, title);
    }
    return navigate('/checkout');
  };

  return (
    <S.Cart>
      <header>
        <div className="fill" />
        <div className="loginCheckerContainer">
          <LoginChecker />
        </div>

        <img src={ logo } alt="logo" />

        <div className="cartDropContainer">
          <CartDropDown
            productQuantity={ productQuantity }
            total={ total }
            handleCheckout={ handleCheckout }
          />
        </div>

      </header>
      <section className="content">

        {products.length < 1 && (
          <EmptyCart />
        )}

        <S.ProductsAndAside>
          <S.ProductContainer>
            {products.length > 0 && (
              products.map((product) => (
                <CartProducts key={ product.id } product={ product } />
              ))
            )}
          </S.ProductContainer>

          {products.length > 0 && (
            <CartAside
              total={ total }
              productQuantity={ productQuantity }
              handleCheckout={ handleCheckout }
            />
          )}

        </S.ProductsAndAside>
      </section>
    </S.Cart>
  );
}

export default Cart;
