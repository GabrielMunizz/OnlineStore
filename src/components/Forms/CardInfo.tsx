import { ChangeEvent } from 'react';
import * as S from '../../styles/CardInfo.style';
import cardValidator from '../../utils/cardValidator';
import visa from '../../images/visa-logo.jpg';
import master from '../../images/master-logo.png';
import diners from '../../images/diners-logo.png';
import amex from '../../images/amex-logo.png';
import discover from '../../images/discover-logo.png';
import getCardBrand from '../../utils/getCardBrand';
import { CardAction, CardInfoType } from '../../utils/types';

type CardInfoProps = {
  cardInfo: CardInfoType;
  cardInfoDispatch: React.Dispatch<CardAction>
};

function CardInfo({ cardInfo, cardInfoDispatch }: CardInfoProps) {
  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    cardInfoDispatch({ type: 'UPDATE', name, value });
  };
  const validateCard = cardValidator(cardInfo.cardNumber);
  const cardBrand = getCardBrand(validateCard.card);
  return (
    <div>
      <S.CardBrandsContainer>
        <img aria-label="visaImg" src={ visa } alt="visa" />
        <img aria-label="masterImg" src={ master } alt="master" />
        <img aria-label="dinersImg" src={ diners } alt="dinners" />
        <img aria-label="amexImg" src={ amex } alt="amex" />
        <img aria-label="discoverImg" src={ discover } alt="discover" />
      </S.CardBrandsContainer>
      <h4>Informações do cartão:</h4>
      <S.CardInfoContainer>
        <label>
          Nome do titular:
          <input
            aria-label="cardOwnerInput"
            type="text"
            name="cardOwner"
            value={ cardInfo.cardOwner }
            onChange={ handleChange }
          />
        </label>
        <label>
          Número do cartão:
          <div>
            <input
              aria-label="cardNumberInput"
              type="text"
              name="cardNumber"
              value={ cardInfo.cardNumber }
              onChange={ handleChange }
            />
            <img src={ cardBrand } alt="" />
          </div>
        </label>
        <label>
          Data de vencimento:
          <input
            aria-label="expirationInput"
            className="expiration"
            type="text"
            name="expirationDate"
            value={ cardInfo.expirationDate }
            onChange={ handleChange }
          />
        </label>
        <label>
          Código de segurança:
          <input
            aria-label="cvcInput"
            className="cvc"
            type="text"
            name="cvc"
            value={ cardInfo.cvc }
            onChange={ handleChange }
          />
        </label>
      </S.CardInfoContainer>
    </div>
  );
}

export default CardInfo;
