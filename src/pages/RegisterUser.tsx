import { useNavigate } from 'react-router';
import { ChangeEvent } from 'react';
import * as S from '../styles/Register.style';
import { Button } from '../styles/Button.style';
import useRegister from '../hooks/useRegister';
import logo from '../images/O.png';

function RegisterUser() {
  const navigate = useNavigate();
  const { registerForm, dispatch, handleSubmit, REGISTER_USER } = useRegister();
  const { userName, name, lastName, email, password, confirmPassword } = registerForm;

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name: key, value } = target;
    dispatch({ type: REGISTER_USER, key, value });
  };

  const handleNavigate = () => {
    navigate('/');
  };
  return (
    <S.RegisterPage>
      <header>
        <img src={ logo } alt="" />
      </header>
      <S.RegisterForm onSubmit={ handleSubmit }>
        <label>
          Login:
          <input
            aria-label="usernameInput"
            name="userName"
            value={ userName }
            onChange={ handleChange }
            type="text"
          />
        </label>
        <label>
          Nome:
          <input
            aria-label="nameInput"
            name="name"
            value={ name }
            onChange={ handleChange }
            type="text"
          />
        </label>
        <label>
          Sobrenome:
          <input
            aria-label="lastNameInput"
            name="lastName"
            value={ lastName }
            onChange={ handleChange }
            type="text"
          />
        </label>
        <label>
          E-mail:
          <input
            aria-label="emailInput"
            name="email"
            value={ email }
            onChange={ handleChange }
            type="email"
          />
        </label>
        <label>
          Senha:
          <input
            aria-label="passwordInput"
            placeholder=" No mínimo 8 caracteres"
            name="password"
            value={ password }
            onChange={ handleChange }
            type="password"
          />
        </label>
        <label>
          Confirmar senha:
          <input
            aria-label="confirmPasswordInput"
            name="confirmPassword"
            value={ confirmPassword }
            onChange={ handleChange }
            type="password"
          />
        </label>
        <div>
          <Button
            aria-label="submitBtn"
          >
            Registrar
          </Button>
          <Button
            aria-label="cancelBtn"
            className="cancelBtn"
            onClick={ handleNavigate }
          >
            Cancelar

          </Button>
        </div>

      </S.RegisterForm>
    </S.RegisterPage>
  );
}

export default RegisterUser;
