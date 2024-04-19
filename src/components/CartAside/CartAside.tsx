import { useNavigate } from 'react-router-dom';
import * as S from '../../styles/Cart.style';
import { Button } from '../../styles/Button.style';

type CartAsideProps = {
  productQuantity: number;
  total: string;
  handleCheckout: () => void;
};

function CartAside({ productQuantity, total, handleCheckout }: CartAsideProps) {
  const navigate = useNavigate();
  return (
    <S.TotalAside>
      <h3
        aria-label="quantity"
        className="quantity"
      >
        {`Quantidade de produtos: ${productQuantity}`}
      </h3>
      <h3
        aria-label="total"
        className="total"
      >
        {`Total do carrinho: ${total}`}
      </h3>
      <div>
        <Button
          aria-label="backToHomeBtn"
          className="backToHomeBtn"
          onClick={ () => navigate('/') }
        >
          Continuar comprando

        </Button>
        <Button
          aria-label="checkoutBtn"
          className="checkoutBtn"
          onClick={ handleCheckout }
        >
          Finalizar compra
        </Button>
      </div>
    </S.TotalAside>
  );
}

export default CartAside;
