import React from 'react';
import { LogInForm } from 'components/index';
import { ModalWindow } from 'components/index';

const Login = ({ show, handleClose }) => {
  return (
    <>
      <ModalWindow show={show} handleClose={handleClose} title={'Log In'}>
        <LogInForm />
      </ModalWindow>
    </>
  );
};
export default Login;
