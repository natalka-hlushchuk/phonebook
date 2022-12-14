import styled from 'styled-components';

export const ContactsListStyled = styled.ul`
  padding: 0;
  margin: 20px auto 0 auto;
  .name {
    display: block;
    font-size: 18px;
    font-weight: 600;
    color: rgb(212, 166, 252);
    margin-bottom: 5px;
  }
`;

export const ListItem = styled.li`
  margin-bottom: 8px;
  color: #423189;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .icons {
    margin-right: 10px;
  }
`;
export const ListLinkWrap = styled.div`
  /* display: flex;
  gap: 10px; */
`;
export const ListLink = styled.a`
  color: #990066;
  &:hover,
  &:focus {
    color: #800080;
  }
`;
export const ContactName = styled.div`
  cursor: pointer;
`;
