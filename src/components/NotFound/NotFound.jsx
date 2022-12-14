import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NotFoundStyled, TextStyled } from './NotFound.styled';
import { Button } from 'components/index';

export const NotFound = () => {
  const navigate = useNavigate();
  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <NotFoundStyled>
      <Button type="button" onClick={handleGoHome}>
        Back to Home
      </Button>
      <TextStyled>The page you are looking for can`t be found</TextStyled>
    </NotFoundStyled>
  );
};
