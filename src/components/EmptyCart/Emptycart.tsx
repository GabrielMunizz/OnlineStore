import { useNavigate } from 'react-router-dom';
import { BsCartX } from 'react-icons/bs';
import * as S from '../../styles/Cart.style';
import { Button } from '../../styles/Button.style';

function EmptyCart() {
  const navigate = useNavigate();
  return (
    <S.EmptyCartContainer>

      <i><BsCartX /></i>
      <p>Seu carrinho está vazio.</p>
      <Button
        aria-label="backToHomeBtn"
        className="backToHomeBtn"
        onClick={ () => navigate('/') }
      >
        Voltar para página principal
      </Button>

    </S.EmptyCartContainer>
  );
}

export default EmptyCart;
