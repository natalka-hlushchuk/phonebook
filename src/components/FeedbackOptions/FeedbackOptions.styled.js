import styled from 'styled-components';
export const BtnList = styled.ul`
  display: flex;
`;

export const BtnItem = styled.li`
  margin-right: 20px;
`;
export const Button = styled.button`
  min-width: 50px;
  padding: 8px;
  background-color: white;
  outline: none;
  border: 1px solid rgba(104, 73, 255, 1);
  border-radius: 4px;
  cursor: pointer;
  :hover {
    background-color: rgba(104, 73, 255, 1);
  }
`;
