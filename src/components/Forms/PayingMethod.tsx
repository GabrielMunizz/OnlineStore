import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ChangeEvent } from 'react';
import {
  BuyerInfoType,
  FetchedProductsType,
  FormAction,
  ReduxType,
} from '../../utils/types';
import CardInfo from './CardInfo';
import alertGenerator from '../../utils/alertGenerator';
import calculateTotal from '../../utils/calculateTotal';
import useCardInfo from '../../hooks/useCardInfo';
import verifyCardInfo from '../../utils/verifyCardInfo';

import * as S from '../../styles/PayingMethod.style';
import { Button } from '../../styles/Button.style';

type PayingMethodProps = {
  handlers: {
    buyerInfo: BuyerInfoType;
    dispatch: React.Dispatch<FormAction>;
    FILL_FORM: string;
  }
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
};

function PayingMethod({ handlers, setIsOpen }: PayingMethodProps) {
  const { buyerInfo, dispatch, FILL_FORM } = handlers;
  const { payingMethod } = buyerInfo;

  const method = ['Boleto', 'Cartão de crédito', 'Pix'];

  const navigate = useNavigate();

  const date = new Date();
  const formattedDate = date.toLocaleDateString('pt-br');

  const cart = useSelector((state: ReduxType) => state.cart) as FetchedProductsType [];
  const total = calculateTotal(cart);

  // adiciona complemento das informações da compra do usuário para salvar no localStorage;

  const completeBuyerInfo = {
    ...buyerInfo,
    purchasedAt: formattedDate,
    cart,
    total,
  };

  const handleChange = ({ target }: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = target;
    dispatch({ type: FILL_FORM, key: name, value });
  };

  // caso todos os campos sejam preechidos, salva no localStorage e abre o modal;

  const handleSubmit = () => {
    const isAnyInfoEmpty = Object.values(buyerInfo).includes('' || 0);
    if (isAnyInfoEmpty) {
      const error = 'error';
      const title = 'Todos os campos são obrigatórios';
      alertGenerator(error, title);
      return false;
    }
    const saveInfo = localStorage.setItem(
      'buyerInfo',
      JSON.stringify(completeBuyerInfo),
    );
    setIsOpen(true);
    return saveInfo;
  };

  const { cardInfo, cardInfoDispatch } = useCardInfo();

  const isDisabled = verifyCardInfo(payingMethod, cardInfo);

  return (
    <S.PayingMethodContainer>
      <div className="selectContainer">
        <label>
          Método de pagamento:
          <select
            aria-label="payingMethodSelect"
            name="payingMethod"
            value={ payingMethod }
            onChange={ handleChange }
          >
            {method.map((eachMethod, index) => (
              <option
                aria-label={ `method(${index})` }
                key={ index }
              >
                {eachMethod}
              </option>
            ))}
          </select>
        </label>
      </div>
      {payingMethod === 'Cartão de crédito' && (
        <CardInfo
          cardInfo={ cardInfo }
          cardInfoDispatch={ cardInfoDispatch }
        />
      )}
      <S.ButtonContainer>
        <Button
          aria-label="backToCartBtn"
          className="checkoutBtns"
          onClick={ () => navigate('/cart') }
        >
          Voltar
        </Button>
        <Button
          aria-label="payBtn"
          className="checkoutBtns finish"
          disabled={ isDisabled }
          onClick={ () => {
            handleSubmit();
          } }
        >
          Concluir
        </Button>
      </S.ButtonContainer>
    </S.PayingMethodContainer>
  );
}

export default PayingMethod;
