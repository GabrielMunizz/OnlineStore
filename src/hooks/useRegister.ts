import { useReducer } from 'react';
import { useNavigate } from 'react-router';
import { FormAction, RegisterUserForm } from '../utils/types';
import alertGenerator from '../utils/alertGenerator';
import { saveUser } from '../utils/userFunctions';
import {
  validatePassword,
  validateEmail,
  validateUserName,
} from '../utils/validateRegisterForm';

const useRegister = () => {
  const navigate = useNavigate();
  const REGISTER_USER = 'REGISTER_USER';

  const initialState = {
    userName: '',
    name: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  } as RegisterUserForm;

  const registerReducer = (state = initialState, action: FormAction) => {
    switch (action.type) {
      case REGISTER_USER:
        return {
          ...state,
          [action.key]: action.value,
        };
      default:
        return state;
    }
  };

  const [registerForm, dispatch] = useReducer(registerReducer, initialState);
  const { userName, name, lastName, email, password, confirmPassword } = registerForm;
  const user = {
    userName,
    name,
    lastName,
    email,
    logged: true,
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validPassword = validatePassword(password, confirmPassword);
    const validEmail = validateEmail(email);
    const validUserName = validateUserName(userName);

    if (validEmail && validPassword && validUserName) {
      const success = 'success';
      const title = 'Usuário cadastrado com sucesso!';
      const text = 'Você será redirecionado para a página principal';
      alertGenerator(success, title, text);
      saveUser(user);
      setTimeout(() => {
        navigate('/');
      }, 2000);
    }
  };

  return {
    registerForm,
    dispatch,
    handleSubmit,
    REGISTER_USER,
  };
};

export default useRegister;
