import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Button.style';

const Button = ({ handleClick, children, color }) => {
  return (
    <S.Button onClick={handleClick} color={color}>
      {children}
    </S.Button>
  );
};

Button.propTypes = {
  handleClick: PropTypes.func,
  children: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Button;
