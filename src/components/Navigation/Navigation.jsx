import React, { useEffect } from 'react';
import * as S from './Navigation.style';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../../helpers/helperFunctions';

const Navigation = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);

  return (
    <S.Navigation>
      <div className='nav-wrapper'>
        <nav>
          {isLoggedIn && (
            <>
              <NavLink activeclassname='active' to='/'>
                Home
              </NavLink>
              <a
                href='/login'
                onClick={() => {
                  localStorage.removeItem('token');
                  setIsLoggedIn(false);
                }}
              >
                Logout
              </a>
            </>
          )}
          {!isLoggedIn && (
            <>
              <NavLink activeclassname='active' to='/login'>
                Login
              </NavLink>
              <NavLink activeclassname='active' to='/register'>
                Register
              </NavLink>
            </>
          )}
        </nav>
      </div>
    </S.Navigation>
  );
};

export default Navigation;
