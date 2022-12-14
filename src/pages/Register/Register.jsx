import React from 'react';
import { RegisterForm } from 'components/index';
import { ModalWindow } from 'components/index';

const Register = ({ show, handleClose }) => {
  return (
    <>
      <ModalWindow show={show} handleClose={handleClose} title={'Register'}>
        <RegisterForm />
      </ModalWindow>
    </>
  );
};
export default Register;
