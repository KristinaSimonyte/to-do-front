import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Header.style';

const Header = ({ children, background }) => {
  return (
    <S.Header background={background}>
      <h1>{children}</h1>
    </S.Header>
  );
};

Header.propTypes = {
  children: PropTypes.string.isRequired,
  background: PropTypes.string,
};

export default Header;
