import styled from '@emotion/styled';
import background from '../../images/background-image.jpg';

export const Container = styled.main`
  padding: 0 20px;
  min-width: 320px;
  max-width: 475px;
  min-height: 100vh;
  padding-top: 100px;
  margin: 0 auto;

  &::before {
    content: ' ';
    position: absolute;
    top: 0px;
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

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1240px) {
    max-width: 1240px;
  }
`;
