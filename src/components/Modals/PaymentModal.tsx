import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';
import alertGenerator from '../../utils/alertGenerator';
import * as S from '../../styles/PaymentModal.style';

type PaymentModalProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function PaymentModal({ isOpen, setIsOpen }: PaymentModalProps) {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const success = 'success';
  const title = 'Pagamento efetuado com sucesso!';

  // Se modal estiver aberto, adiciona a classe no body da aplicação para sumir a barra de rolagem;
  if (isOpen) {
    document.body.classList.add('active-modal');
  } else {
    return null;
  }
  setTimeout(() => {
    if (isOpen) {
      setIsLoading(false);
      setIsOpen(false);
      alertGenerator(success, title);
      navigate('/success');
    }
  }, 2000);
  return (

    isLoading && (
      <>
        <S.Overlay />
        <S.PaymentModal>
          <Loading />
        </S.PaymentModal>
      </>
    )

  );
}

export default PaymentModal;
