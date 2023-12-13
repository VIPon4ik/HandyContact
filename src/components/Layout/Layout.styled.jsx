import styled from "@emotion/styled";
import background from '../../images/background-image.jpg';

export const Container = styled.main`
  padding: 0 20px;
  min-width: 320px; 
  padding-top: 124px;

  &::before {
    content: ' ';
    position: absolute;
    top: 64px;
    left: 0;
    width: 100%;
    min-height: 100vh;
    background-image: url(${background});
    opacity: 0.2;
    background-repeat: no-repeat;
    background-position: 50% 0;
    background-size: cover;
    z-index: -10;
  }
`