import styled from '@emotion/styled';
import background from '../../images/background-image.jpg';

export const Container = styled.main`
  padding: 0 20px;
  min-width: 320px;
  padding-top: 100px;
  min-height: 628px;

  &::before {
    content: ' ';
    position: absolute;
    top: 0px;
    left: 0;
    width: 100%;
    min-height: 628px;
    background-image: url(${background});
    opacity: 0.2;
    background-repeat: no-repeat;
    background-position: 50% 0;
    background-size: cover;
    z-index: -10;
  }

  @media screen and (min-width: 768px) {
    &::before {
      min-height: 100vh;
    }
  }  

  // @media screen and (min-width: 1240px) {
  //   & {
  //     padding: 0 20px;
  //   }
  // }
`;
