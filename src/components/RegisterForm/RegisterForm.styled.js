import styled from 'styled-components';

export const RegisterFormStyled = styled.form``;

export const ContactsLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  font-weight: 600;
  color: rgb(212, 166, 252);
  margin-bottom: 5px;
  .text {
    display: block;
    padding-bottom: 5px;
  }
`;
export const Field = styled.input`
  padding: 5px;
  background-color: white;
  color: #423189;
  border: 1px solid rgb(212, 166, 252);
  border-radius: 4px;
  :hover,
  :focus {
    outline: none;
    background-color: rgb(243, 233, 252);
  }
`;

export const Button = styled.button`
  min-width: 100px;
  padding: 5px;
  margin: 0 auto;
  display: block;
  margin-top: 20px;
  background-color: rgb(212, 166, 252);
  color: white;
  border: 1px solid rgb(212, 166, 252);
  border-radius: 4px;
  cursor: pointer;
  :hover {
    background-color: rgb(243, 233, 252);
  }
  :disabled {
    background-color: rgb(243, 233, 252);
  }
`;
