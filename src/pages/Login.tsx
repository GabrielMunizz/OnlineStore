import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { getUser, logUser } from '../utils/userFunctions';
import * as S from '../styles/Login.style';
import { Button } from '../styles/Button.style';
import alertGenerator from '../utils/alertGenerator';
import logo from '../images/O.png';

function Login() {
  const [isValid, setIsValid] = useState(false);
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const error = 'error';
  const success = 'success';
  const loadUser = getUser(user);

  const navigate = useNavigate();

  const handleValidation = () => {
    if (user.length >= 3 && password.length >= 7) {
      setIsValid(true);
    }
  };

  const handleUser = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    setUser(() => value);
    handleValidation();
  };

  const handlePassword = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    setPassword(() => value);
    handleValidation();
  };

  const handleSubmit = () => {
    if (!loadUser) {
      const title = 'Nome de usuário não encontrado!';
      alertGenerator(error, title);
    } else {
      const title = `Seja bem-vindo ${loadUser.userName}!`;
      logUser(loadUser.userName);
      alertGenerator(success, title);
      setTimeout(() => {
        navigate('/');
      }, 2000);
    }
  };

  return (
    <S.LoginContent>
      <header>
        <img src={ logo } alt="" />
      </header>
      <div>
        <label>
          Login:
          <input
            aria-label="loginInput"
            value={ user }
            onChange={ handleUser }
            type="text"
          />
        </label>
        <label>
          Senha:
          <input
            aria-label="loginPassInput"
            value={ password }
            onChange={ handlePassword }
            type="password"
          />
        </label>
        <Button
          aria-label="loginSubmitBtn"
          disabled={ !isValid }
          onClick={ handleSubmit }
        >
          Entrar

        </Button>
        <p>
          Não possui cadastro? Cadastre-se
          {' '}
          <Link to="/register">aqui!</Link>
        </p>
      </div>
    </S.LoginContent>
  );
}

export default Login;
