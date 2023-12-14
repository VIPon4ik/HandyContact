import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const BurgerMenuContainer = styled.div`
  background-color: #1163c1;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  left: 0;
  top: 0;
  z-index: 100;
`;

export const BurgerNavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const BurgerLink = styled(Link)`
  color: #fff;
  text-decoration: none;
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
  color: rgb(67, 77, 91);
  color: #fff;

  &:hover {
    color: #212121;
  }
`;
