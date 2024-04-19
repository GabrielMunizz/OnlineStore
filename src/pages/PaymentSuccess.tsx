import { MdPix } from 'react-icons/md';

import { FaFileInvoiceDollar, FaRegCreditCard } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import resetCart from '../redux/actions/resetCart';

import { FinalBuyerInfoType, UserType } from '../utils/types';
import { getBuyerInfo, getLoggedUser } from '../utils/userFunctions';
import transformToPrice from '../utils/transformToPrice';

import CheckoutProducts from '../components/Checkout/CheckoutProducts';
import PixModal from '../components/Modals/PixModal';

import { Button } from '../styles/Button.style';
import * as S from '../styles/PaymentSuccess.style';
import logo from '../images/O.png';

function PaymentSuccess() {
  const modalClass = 'active-modal';
  // Ao carregar a página, remove a classe do body para que a barra de rolagem seja habilitada novamente;
  document.body.classList.remove(modalClass);

  const buyerInfo = getBuyerInfo() as FinalBuyerInfoType;
  const {
    address,
    city,
    state,
    num,
    CEP,
    purchasedAt,
    cart,
    fullName,
    payingMethod,
    total,
  } = buyerInfo;
  const formattedPrice = transformToPrice(total);

  const user = getLoggedUser() as UserType;

  const [pixOpen, setPixOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleReset = () => {
    dispatch(resetCart([]));
    navigate('/');
  };

  // quando o pagamento por pix é escolhido, insere a classe novamente para abertura do modal onde mostra o QR code. OBS: o QR code funciona
  if (pixOpen) {
    document.body.classList.add(modalClass);
  } else {
    document.body.classList.remove(modalClass);
  }

  return (
    <S.OrderDetailsContent>
      <S.Header>
        <img src={ logo } alt="" />
      </S.Header>
      <S.OrderDetailsContainer>
        <S.OrderDetails>
          <h2>Detalhes do Pedido:</h2>
          <CheckoutProducts cart={ cart } />
          <p>{`Pedido em ${purchasedAt}`}</p>
        </S.OrderDetails>
        <S.AdressAndPayment>
          <div>
            <h3>Endereço de envio</h3>
            <p>{fullName}</p>
            <p>{`${address}, ${num}`}</p>
            <p>{`${city}, ${state}, CEP: ${CEP}`}</p>
          </div>
          <div>
            <h3>Método de pagamento</h3>
            <span>{payingMethod === 'Pix' && <MdPix /> }</span>
            <span>
              {payingMethod === 'Boleto' && <FaFileInvoiceDollar /> }
            </span>
            <span>
              {payingMethod === 'Cartão de crédito' && (
                <FaRegCreditCard />
              )}
            </span>
            <p className="payingMethod">{payingMethod}</p>
            <p className="conditionaMessage">
              {payingMethod === 'Pix' && (
                <button
                  aria-label="pixModalBtn"
                  className="pixModalBtn"
                  onClick={ () => setPixOpen(true) }
                >
                  Clique aqui para acessar o QR Code
                </button>
              ) }
            </p>
            <p className="conditionaMessage">
              {payingMethod === 'Boleto'
                && `Boleto enviado para o e-mail: ${user.email}`}
            </p>
            <p className="conditionaMessage">
              {payingMethod === 'Cartão de crédito'
                && 'O pedido será enviado assim que o pagamento for autorizado.'}
            </p>
          </div>
          <div>
            <h3>Resumo do pedido</h3>
            <p>{`Total geral: ${formattedPrice}`}</p>
          </div>
        </S.AdressAndPayment>
      </S.OrderDetailsContainer>
      <PixModal pixOpen={ pixOpen } setPixOpen={ setPixOpen } />
      <Button
        aria-label="backToHomeBtn"
        onClick={ handleReset }
      >
        Voltar para página principal
      </Button>
    </S.OrderDetailsContent>
  );
}

export default PaymentSuccess;
