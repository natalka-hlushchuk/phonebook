import React from 'react';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import { ModalWindow } from 'components/Modal/Modal';

const Register = ({ show, handleClose }) => {
  return (
    <>
      <ModalWindow
        className="register"
        show={show}
        handleClose={handleClose}
        title={'Register'}
      >
        <RegisterForm />
      </ModalWindow>
    </>
  );
};
export default Register;
