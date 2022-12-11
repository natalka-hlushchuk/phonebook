import React from 'react';
import LogInForm from 'components/LogInForm/LogInForm';
import { Box } from 'components/Box/Box.styled';
import { Title } from './Login.styled';

const Login = () => {
  return (
    <Box
      as="section"
      m="auto"
      bg="white"
      borderRadius="8px"
      width="450px"
      p="30px"
      mt="30px"
    >
      <Title>Login Form</Title>
      <div>
        <LogInForm />
      </div>
    </Box>
  );
};
export default Login;
