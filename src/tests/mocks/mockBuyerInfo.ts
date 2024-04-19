import mockProducts from './mockProducts';

export const mockBuyerInfoCred = {
  CEP: '00000000',
  CPF: '11111111111',
  address: 'Rua dos Alfeneiros',
  cart: [mockProducts.results[0]],
  city: 'Juiz de Fora',
  complement: 'Casa',
  email: 'teste@teste.com',
  fullName: 'Teste Testando',
  num: '4',
  payingMethod: 'Cartão de crédito',
  phone: '32984863437',
  purchasedAt: '10/04/2024',
  state: 'Minas Gerais',
  total: 21.09,
};

export const mockBuyerInfoPix = {
  CEP: '00000000',
  CPF: '11111111111',
  address: 'Rua dos Alfeneiros',
  cart: [mockProducts.results[0]],
  city: 'Juiz de Fora',
  complement: 'Casa',
  email: 'teste@teste.com',
  fullName: 'Teste Testando',
  num: '4',
  payingMethod: 'Pix',
  phone: '32984863437',
  purchasedAt: '10/04/2024',
  state: 'Minas Gerais',
  total: 21.09,
};
