import { CardInfoType } from './types';

const verifyCardInfo = (payingMethod: string, cardInfo: CardInfoType) => {
  const { cardOwner, cardNumber, cvc, expirationDate } = cardInfo;
  if (payingMethod !== 'Cartão de crédito') {
    return false;
  }
  const validCardOwner = cardOwner.length > 3;
  const validCardNumber = cardNumber.length >= 13;
  const validCvc = cvc.length === 3;
  const validexpirationDate = expirationDate.length >= 5;

  return !(validCardNumber && validCardOwner && validCvc && validexpirationDate);
};

export default verifyCardInfo;
