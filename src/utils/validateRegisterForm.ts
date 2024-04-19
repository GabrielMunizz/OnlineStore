import { UserType } from './types';
import alertGenerator from './alertGenerator';

const error = 'error';

export const validatePassword = (password: string, confirmPassword: string) => {
  const text = 'Altere para cadastrar';

  if (password.length < 8) {
    const title = 'A senha precisa ter 8 caracteres!';

    alertGenerator(error, title, text);

    return false;
  }
  if (password !== confirmPassword) {
    const title = 'Senha está divergente da confirmação!';

    alertGenerator(error, title, text);

    return false;
  }
  return true;
};

export const validateEmail = (email: string) => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const usersExists = localStorage.getItem('user') as string;

  if (!regex.test(email)) {
    const title = 'Por favor, insira um e-mail válido!';
    const text = 'Ex.: exemplo23@exemplo.com';

    alertGenerator(error, title, text);

    return false;
  }
  if (usersExists) {
    const loadUsers = JSON.parse(usersExists) as UserType[];
    const emailInUse = loadUsers.find((user) => user.email === email);
    if (emailInUse) {
      const title = 'Esse e-mail já está registrado!';

      alertGenerator(error, title);

      return false;
    }
  }
  return true;
};

export const validateUserName = (userName: string) => {
  const usersExists = localStorage.getItem('user') as string;
  if (userName === '') {
    const title = 'O campo "Login" precisa ser preenchido';

    alertGenerator(error, title);

    return false;
  }
  if (usersExists) {
    const registeredUsers = JSON.parse(usersExists) as UserType[];
    const alreadyInUse = registeredUsers.find((user) => user.userName === userName);
    if (alreadyInUse) {
      const title = 'Uma pena! Esse Login já está em uso.';

      alertGenerator(error, title);

      return false;
    }
  }
  return true;
};
