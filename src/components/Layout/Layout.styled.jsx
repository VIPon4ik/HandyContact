import styled from "@emotion/styled";
import background from '../../images/background-image.jpg';

export const Container = styled.main`
  padding: 0 20px;
  min-width: 320px;
  min-height: 100vh;
  padding-top: 64px;

  &::before {
    content: ' ';
    position: absolute;
    top: 64px;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${background});
    opacity: 0.2;
    background-repeat: no-repeat;
    background-position: 50% 0;
    background-size: cover;
    z-index: -10;
  }
`