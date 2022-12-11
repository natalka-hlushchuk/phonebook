import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AuthNavStyled = styled.div`
  display: flex;
  gap: 15px;
`;

export const NavLinkStyled = styled(NavLink)`
  font-weight: 500;
  font-size: 30px;
  line-height: 47px;
  color: black;
  text-decoration: none;
  letter-spacing: 0.02em;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
  &.active {
    color: #990066;
  }
  &:hover:not(.active),
  &:focus-visible:not(.active) {
    color: #800080;
    -webkit-text-shadow: 2px 2px 2px #000;
    -moz-text-shadow: 2px 2px 2px #000;
    text-shadow: 2px 2px 2px #000;
  }
`;
