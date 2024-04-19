import { useState } from 'react';
import * as S from '../styles/Checkout.style';

import PaymentModal from '../components/Modals/PaymentModal';
import FormAndPayment from '../components/Checkout/FormAndPayment';
import logo from '../images/O.png';

function Checkout() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.CheckoutPage>
      <header>
        <img src={ logo } alt="logo" />
      </header>
      <section className="checkoutContent">
        <FormAndPayment
          setIsOpen={ setIsOpen }
        />
        <PaymentModal isOpen={ isOpen } setIsOpen={ setIsOpen } />
      </section>
    </S.CheckoutPage>
  );
}

export default Checkout;
