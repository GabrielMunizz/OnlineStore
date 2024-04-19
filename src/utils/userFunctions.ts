import { BuyerInfoType, UserType } from './types';

// função para pegar usuário com base no userName;

export const getUser = (userName: string) => {
  const getLocalUser = localStorage.getItem('user');
  if (getLocalUser) {
    const loadUser = JSON.parse(getLocalUser) as UserType[];
    const findUser = loadUser.find((user) => user.userName === userName);
    return findUser;
  }
  return false;
};

// função para salvar o usuário no array de usuários do localStorage

export const saveUser = (user: UserType) => {
  const localUserExists = localStorage.getItem('user');
  if (localUserExists) {
    const loadUser = JSON.parse(localUserExists) as UserType[];
    return localStorage
      .setItem('user', JSON.stringify([...loadUser, user]));
  }
  return localStorage.setItem('user', JSON.stringify([user]));
};

// função para pegar o usuário de acordo com o status logged: true (logado);

export const getLoggedUser = () => {
  const getLocalUser = localStorage.getItem('user');
  if (getLocalUser) {
    const loadUser = JSON.parse(getLocalUser) as UserType[];
    const findUser = loadUser.find((user) => user.logged) || false;
    return findUser;
  }
  return false;
};

// função para alterar o status do usuário de deslogado, para logado;

export const logUser = (userName: string) => {
  const getLocalUsers = localStorage.getItem('user');
  if (getLocalUsers) {
    const loadUsers = JSON.parse(getLocalUsers) as UserType[];
    const updatedUserStatus = loadUsers.map((user) => {
      if (user.userName === userName) {
        return { ...user, logged: true };
      }
      return user;
    });
    return localStorage
      .setItem('user', JSON.stringify(updatedUserStatus));
  }
  return false;
};

// função para deslogar um usuário;

export const logOutUser = (userName: string) => {
  const getLocalUsers = localStorage.getItem('user');
  if (getLocalUsers) {
    const loadUsers = JSON.parse(getLocalUsers) as UserType[];
    const updatedUserStatus = loadUsers.map((user) => {
      if (user.userName === userName) {
        return { ...user, logged: false };
      }
      return user;
    });
    return localStorage
      .setItem('user', JSON.stringify(updatedUserStatus));
  }
};

// função para pegar as informações do formulário de compras salvas no localStorage;

export const getBuyerInfo = () => {
  const infoExists = localStorage.getItem('buyerInfo');
  if (infoExists) {
    const loadedInfo = JSON.parse(infoExists) as BuyerInfoType;
    return loadedInfo;
  }
  return null;
};
