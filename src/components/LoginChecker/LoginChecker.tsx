import { Link } from 'react-router-dom';
import { useState } from 'react';
import { UserType } from '../../utils/types';
import { getLoggedUser, logOutUser } from '../../utils/userFunctions';
import { LogoutButton } from '../../styles/LogoutButton.style';
import * as S from '../../styles/LoginChecker.style';

function LoginChecker() {
  const user = getLoggedUser() as UserType;
  const isLogged = user.logged;
  const [logged, setLogged] = useState(isLogged);

  const handleLogout = () => {
    if (isLogged) {
      logOutUser(user.userName);
      setLogged(false);
    }
  };
  return (
    <section>
      {logged ? (
        <S.WelcomeUser>
          <p>
            Seja bem vindo:
          </p>
          <div>
            <p>{user.userName}</p>
            <LogoutButton
              aria-label="logoutBtn"
              onClick={ handleLogout }
            >
              Logout
            </LogoutButton>
          </div>
        </S.WelcomeUser>
      ) : (
        <S.LoginOrRegister>
          <p>
            Já é membro?
            {' '}
            <Link
              aria-label="loginBtn"
              to="/login"
            >
              Login
            </Link>
            {' '}
            ou
            {' '}
            <Link
              aria-label="signUpBtn"
              to="/register"
            >
              Cadastre-se aqui!
            </Link>
          </p>
        </S.LoginOrRegister>
      )}
    </section>
  );
}

export default LoginChecker;
