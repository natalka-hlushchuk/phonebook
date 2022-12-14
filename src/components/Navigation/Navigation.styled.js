import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavLinkStyled = styled(NavLink)`
  font-size: 18px;
  text-decoration: none;
  letter-spacing: 0.02em;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
  &.active {
    color: black;
  }
  &:hover:not(.active),
  &:focus-visible:not(.active) {
    color: #800080;
    -webkit-text-shadow: 2px 2px 2px #000;
    -moz-text-shadow: 2px 2px 2px #000;
    text-shadow: 2px 2px 2px #000;
  }
`;
