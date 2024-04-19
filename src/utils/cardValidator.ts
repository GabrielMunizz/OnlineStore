const cardValidator = (cardNumber: string) => {
  const cards = [
    { Visa: /^4[0-9]{12}(?:[0-9]{3})/ },
    { Mastercard: /^5[1-5][0-9]{14}/ },
    { Amex: /^3[47][0-9]{13}/ },
    { DinersClub: /^3(?:0[0-5]|[68][0-9])[0-9]{11}/ },
    { Discover: /^6(?:011|5[0-9]{2})[0-9]{12}/ },
  ];

  const match = cards.filter((card) => cardNumber.match(Object.values(card)[0]));
  const isValid = match.length !== 0;

  const card = isValid ? Object.keys(match[0])[0] : 'Inválido';

  return {
    validCard: isValid,
    card,
  };
};

export default cardValidator;
