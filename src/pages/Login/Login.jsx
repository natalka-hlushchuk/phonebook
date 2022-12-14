import React from 'react';
import LogInForm from 'components/LogInForm/LogInForm';
import { ModalWindow } from 'components/Modal/Modal';

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
