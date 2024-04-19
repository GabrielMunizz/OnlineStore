import { useNavigate } from 'react-router-dom';

import * as S from '../../styles/MobileAside.style';
import { Button } from '../../styles/Button.style';

type MobileAsideProps = {
  productQuantity: number;
  total: string;
  handleCheckout: () => void;
};

function MobileAside({ productQuantity, total, handleCheckout }: MobileAsideProps) {
  const navigate = useNavigate();
  return (
    <S.MobileAside>
      <div className="textContainer">
        <p>{`Produtos: ${productQuantity}`}</p>
        <p>{`Total: ${total}`}</p>

      </div>
      <div className="buttonsContainer">
        <Button onClick={ handleCheckout }>
          Finalizar compra
        </Button>
        <Button onClick={ () => navigate('/') }>
          Continuar Comprando
        </Button>
      </div>
    </S.MobileAside>
  );
}

export default MobileAside;
