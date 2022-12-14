import styled from 'styled-components';

export const ButtonStyled = styled.button`
  min-width: 100px;
  padding: 3px;
  margin: 0 auto;
  display: block;
  background-color: ${props =>
    props.fromHeader ? '#990066' : 'rgb(212, 166, 252)'};
  color: white;
  border: ${props =>
    props.fromHeader ? '1px solid #800080' : '1px solid rgb(243, 233, 252)'};
  border-radius: 4px;
  cursor: pointer;
  :hover {
    background-color: ${props =>
      props.fromHeader ? '#800080' : 'rgb(243, 233, 252)'};
    color: ${props => (props.fromHeader ? 'white' : '#800080')};
    border: ${props =>
      props.fromHeader ? '1px solid #800080' : '1px solid rgb(212, 166, 252)'};
  }
`;
