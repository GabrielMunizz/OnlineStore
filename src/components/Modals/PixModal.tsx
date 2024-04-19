import * as S from '../../styles/PaymentModal.style';
import { Button } from '../../styles/Button.style';
import QRCode from '../../images/QRCode.png';

type PixModalProps = {
  pixOpen: boolean;
  setPixOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function PixModal({ pixOpen, setPixOpen }: PixModalProps) {
  if (!pixOpen) {
    return null;
  }
  return (
    <>
      <S.Overlay />
      <S.PaymentModal>
        <img
          aria-label="qrCodeImg"
          src={ QRCode }
          alt="QR Code"
        />
        <Button
          aria-label="closeModalBtn"
          onClick={ () => setPixOpen(false) }
        >
          Fechar

        </Button>
      </S.PaymentModal>
    </>
  );
}

export default PixModal;
