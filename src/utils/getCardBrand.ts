import visa from '../images/visa-logo.jpg';
import master from '../images/master-logo.png';
import diners from '../images/diners-logo.png';
import amex from '../images/amex-logo.png';
import discover from '../images/discover-logo.png';
import redX from '../images/redX.jpg';

const getCardBrand = (cardBrand: string) => {
  switch (cardBrand) {
    case 'Visa':
      return visa;
    case 'Mastercard':
      return master;
    case 'Amex':
      return amex;
    case 'DinersClub':
      return diners;
    case 'Discover':
      return discover;
    default:
      return redX;
  }
};

export default getCardBrand;
