import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled.header`
  padding: 10px 20px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(25, 118, 210);
  position: fixed;
  width: 100%;
`;

export const HeaderLink = styled(NavLink)`
  font-size: 18px;
  color: #fff;
  text-decoration: none;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  &.active {
    background: #fff;
    color: #1163c1;
    transition: transform 0.3s ease-in-out;
  }

  &.active:hover {
    transform: scale(1.1);
    background: #fff;
    color: #1163c1;
  }
`;

export const NavContainer = styled.nav`
  @media screen and (max-width: 768px) {
    display: none;
  }
  
  display: flex;
  align-items: center;
  gap: 20px;
`

export const BurgerButton = styled.button`
  background-color: transparent;
  border: none;
  color: #fff;
`