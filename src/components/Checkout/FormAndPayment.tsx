import { useSelector } from 'react-redux';
import useForm from '../../hooks/useForm';

import calculateQuantity from '../../utils/calculateQuatity';
import calculateTotal from '../../utils/calculateTotal';
import transformToPrice from '../../utils/transformToPrice';

import { FetchedProductsType, ReduxType } from '../../utils/types';

import BuyerInfoForm from '../Forms/BuyerInfoForm';
import PayingMethod from '../Forms/PayingMethod';
import CheckoutProducts from './CheckoutProducts';
import * as S from '../../styles/Checkout.style';

type CheckoutContentProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function FormAndPayment({

  setIsOpen,

}: CheckoutContentProps) {
  const cart = useSelector((state: ReduxType) => state.cart) as FetchedProductsType [];
  const totalQuantity = calculateQuantity(cart);
  const cartPrice = calculateTotal(cart);
  const total = transformToPrice(cartPrice);

  const handlers = useForm();
  return (
    <S.FormAndPayment>
      <S.FormContainer>
        <h2>Informações do cliente:</h2>
        <BuyerInfoForm handlers={ handlers } />
      </S.FormContainer>
      <S.PayingMethodContainer>
        <h2>Informações de pagamento:</h2>
        <aside>
          <CheckoutProducts cart={ cart } />
          <hr />
          <div className="textContainer">
            <h3>{`Total de produtos: ${totalQuantity}`}</h3>
            <h3>{`Total a pagar: ${total}`}</h3>
          </div>
          <PayingMethod handlers={ handlers } setIsOpen={ setIsOpen } />
        </aside>
      </S.PayingMethodContainer>
    </S.FormAndPayment>
  );
}

export default FormAndPayment;
