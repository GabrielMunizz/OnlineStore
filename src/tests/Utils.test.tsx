/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable react-func/max-lines-per-function */
import calculateQuantity from '../utils/calculateQuatity';
import { mockCart, mockInvalidQuantityCart } from './mocks/mockCart';
import calculateTotal from '../utils/calculateTotal';
import getCardBrand from '../utils/getCardBrand';
import totalRating from '../utils/totalRating';
import { mockReviews } from './mocks/mockReviews';
import { getMercadoPago, getProducts, getStarColor } from '../utils/getters';
import mockProducts from './mocks/mockProducts';
import verifyCardInfo from '../utils/verifyCardInfo';
import { invalidMockCardInfo, mockCardInfo } from './mocks/mockCardInfo';
import { validateEmail, validatePassword, validateUserName } from '../utils/validateRegisterForm';
import mockUser from './mocks/mockUser';
import { getBuyerInfo, getLoggedUser, getUser, logOutUser, logUser, saveUser } from '../utils/userFunctions';
import { mockBuyerInfoPix } from './mocks/mockBuyerInfo';

describe('Teste das funções na pasta "utils"', () => {
  test('Testes da função calculateQuantity', () => {
    const quantity = calculateQuantity(mockCart);
    const invalidQuantity = calculateQuantity(mockInvalidQuantityCart);

    expect(quantity).toBe(2);
    expect(invalidQuantity).toBe(0);
  });

  test('Testes da função calculateTotal', () => {
    const totalPrice = calculateTotal(mockCart);
    const invalidQuantity = calculateTotal(mockInvalidQuantityCart);

    expect(totalPrice).toBe(198);
    expect(invalidQuantity).toBe(0);
  });

  test('Testes da função getCardBrand', () => {
    const master = getCardBrand('Mastercard');
    const visa = getCardBrand('Visa');
    const amex = getCardBrand('Amex');
    const diners = getCardBrand('DinersClub');
    const discover = getCardBrand('Discover');
    const redX = getCardBrand('');

    expect(master).toBe('/src/images/master-logo.png');
    expect(visa).toBe('/src/images/visa-logo.jpg');
    expect(amex).toBe('/src/images/amex-logo.png');
    expect(diners).toBe('/src/images/diners-logo.png');
    expect(discover).toBe('/src/images/discover-logo.png');
    expect(redX).toBe('/src/images/redX.jpg');
  });

  test('Testes da função totalRating', () => {
    const rating = totalRating(mockReviews);

    expect(rating).toBe(4);
  });

  test('Teste da função getMercadoPago no arquivo "getters"', () => {
    const mercadoPago = getMercadoPago(true);
    const notMercadoPago = getMercadoPago(false);

    expect(mercadoPago).toBe('Sim');
    expect(notMercadoPago).toBe('Não');
  });

  test('Teste da função getStarColor no arquivo "getters"', () => {
    const orange = getStarColor(1, 2);
    const grey = getStarColor(2, 1);

    expect(orange).toBe('orange');
    expect(grey).toBe('grey');
  });

  test('Teste da função getProducts no arquivo "getters"', () => {
    const product = getProducts(mockProducts);
    const defaultReturn = getProducts(undefined);

    expect(product).toEqual([...mockProducts.results]);
    expect(defaultReturn).toEqual([]);
  });

  test('Teste da função verifyCardInfo', () => {
    const validCardInfo = verifyCardInfo('Cartão de crédito', mockCardInfo);
    const invalidCardInfo = verifyCardInfo('Cartão de crédito', invalidMockCardInfo);
    const notCard = verifyCardInfo('Pix', mockCardInfo);

    expect(validCardInfo).toBe(false);
    expect(invalidCardInfo).toBe(true);
    expect(notCard).toBe(false);
  });

  test('Teste da função validatePassword no arquivo validateRegisterForm', () => {
    const validPassword = validatePassword('12345678', '12345678');
    const wrongPassword = validatePassword('12345678', '123456789');
    const invalidPassoword = validatePassword('123456', '123456');

    expect(validPassword).toBe(true);
    expect(wrongPassword).toBe(false);
    expect(invalidPassoword).toBe(false);
  });

  test('Teste da função validateEmail no arquivo validateRegisterForm', () => {
    localStorage.setItem('user', JSON.stringify(mockUser));
    const validEmail = validateEmail('teste2@teste.com');
    const emailAlreadyInUse = validateEmail('teste@teste.com');
    const invalidEmail = validateEmail('emailInvalido');

    expect(validEmail).toBe(true);
    expect(emailAlreadyInUse).toBe(false);
    expect(invalidEmail).toBe(false);
  });

  test('Teste da função validateUserName no arquivo validateRegisterForm', () => {
    localStorage.setItem('user', JSON.stringify(mockUser));
    const validUserName = validateUserName('NovoUser');
    const userNameAlreadyInUse = validateUserName('Testando');
    const invalidUserName = validateUserName('');

    expect(validUserName).toBe(true);
    expect(userNameAlreadyInUse).toBe(false);
    expect(invalidUserName).toBe(false);
  });

  test('Teste da função getUser no arquivo userFunctions', () => {
    localStorage.setItem('user', JSON.stringify(mockUser));
    const user = getUser('Testando');

    expect(user).toEqual(
      {
        email: 'teste@teste.com',
        lastName: 'Teste',
        logged: true,
        name: 'User',
        userName: 'Testando',
      },
    );

    localStorage.clear();
    const userNotFound = getUser('nãoExistente');
    expect(userNotFound).toBe(false);
  });

  test('Teste da função saveUser no arquivo userFunctions', () => {
    saveUser(mockUser[0]);

    const savedUser = JSON.parse(localStorage.getItem('user') as string);

    expect(savedUser).toEqual(mockUser);

    const newUser = {
      email: 'teste2@teste.com',
      lastName: 'Teste2',
      logged: false,
      name: 'NovoUser',
      userName: 'SempreTestando',
    };

    saveUser(newUser);

    const savedUsers = JSON.parse(localStorage.getItem('user') as string);

    expect(savedUsers).toEqual([mockUser[0], newUser]);
  });

  test('Teste da função getLoggedUser no arquivo userFunctions', () => {
    localStorage.setItem('user', JSON.stringify(mockUser));

    const loggedUser = getLoggedUser();

    expect(loggedUser).toEqual(mockUser[0]);

    localStorage.clear();

    const notFound = getLoggedUser();

    expect(notFound).toBe(false);
  });

  test('Teste da função logUser e logoutUser no arquivo userFunctions', () => {
    const notLoggedUser = [
      {
        email: 'teste@teste.com',
        lastName: 'Teste',
        logged: false,
        name: 'User',
        userName: 'Testando',
      },
    ];
    localStorage.setItem('user', JSON.stringify(notLoggedUser));

    logUser('Testando');

    const updatedUser = JSON.parse(localStorage.getItem('user') as string);

    expect(updatedUser).toEqual(mockUser);

    logOutUser('Testando');

    const newUpdatedUser = JSON.parse(localStorage.getItem('user') as string);

    expect(newUpdatedUser).toEqual(notLoggedUser);

    localStorage.clear();

    const notFound = logUser('testando');

    expect(notFound).toBe(false);
  });

  test('Teste da função getBuyerInfo no arquivo userFunctions', () => {
    localStorage.setItem('buyerInfo', JSON.stringify(mockBuyerInfoPix));

    const buyerInfo = getBuyerInfo();

    expect(buyerInfo).toEqual(mockBuyerInfoPix);

    localStorage.clear();

    const noBuyerInfo = getBuyerInfo();

    expect(noBuyerInfo).toBe(null);
  });
});
