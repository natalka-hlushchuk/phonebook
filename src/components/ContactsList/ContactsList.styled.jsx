import styled from 'styled-components';

export const ContactsListStyled = styled.ul`
  padding: 0;
  margin: 20px auto 0 auto;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  margin: 0;
  margin-bottom: 8px;
  color: #423189;
  .icons {
    margin-right: 10px;
  }
`;
export const ListLinkWrap = styled.div`
  display: flex;
  gap: 10px;
`;
export const ListLink = styled.a`
  color: #990066;
  &:hover,
  &:focus {
    color: #800080;
  }
`;
