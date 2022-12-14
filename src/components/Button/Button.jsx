import React from 'react';
import { ButtonStyled } from 'components/Button/Button.styled';

export const Button = ({ children, type, onClick, fromHeader = false }) => {
  return (
    <ButtonStyled type={type} onClick={onClick} fromHeader={fromHeader}>
      {children}
    </ButtonStyled>
  );
};
