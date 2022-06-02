import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Input.style';

const Input = ({ value, setState, labelText, placeHolder, type }) => {
  return (
    <S.Input>
      <label htmlFor=''>{labelText}</label>
      <input
        value={value}
        onChange={(e) => {
          setState(e.target.value);
        }}
        type={type}
        placeholder={placeHolder}
      />
    </S.Input>
  );
};

Input.propTypes = {
  value: PropTypes.string,
  setState: PropTypes.func,
  labelText: PropTypes.string.isRequired,
  placeHolder: PropTypes.string,
  type: PropTypes.string.isRequired,
};

export default Input;
