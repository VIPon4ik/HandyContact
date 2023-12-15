import styled from '@emotion/styled';
import heroImage from '../../images/hero-image.jpg';

export const HomeGridContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.2);
  height: 500px;
  max-width: 1240px;
  margin: 0 auto;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    & {
      flex-direction: row;
    }
  }
`;

export const HomeLeftSection = styled.section`
  padding: 20px;

  @media screen and (min-width: 768px) {
    padding: 60px;
    max-width: 380px;
  }

  @media screen and (min-width: 768px) {
    padding: 100px;
    max-width: 550px;
  }
`;

export const HomeRightSection = styled.section`
  padding: 40px;
  width: 100%;
  height: 100%;
  background: gray;
  background-image: url(${heroImage});
  background-repeat: no-repeat;
  background-position: 50% 0;
  background-size: cover;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;

  @media screen and (min-width: 768px) {
    & {
      border-bottom-right-radius: 20px;
      border-top-right-radius: 20px;
      border-bottom-left-radius: 0px;
    }
  }
`;

export const HomeTitle = styled.h1`
  font-size: 20px;
  color: #212121;
  margin-bottom: 20px;
  line-height: 1.5;

  @media screen and (min-width: 1240px) {
    & {
      font-size: 28px;
    }
  }
`;

export const HomeTitleSpan = styled.span`
  font-size: 28px;
  @media screen and (min-width: 1240px) {
    & {
      font-size: 50px;
    }
  }
  display: block;
  color: #007fff;
`;

export const HomeText = styled.p`
  letter-spacing: 0.02rem;
  line-height: 1.5;
  font-size: 16px;
  color: #434d5b;
  margin-bottom: 20px;
`;

export const HomeButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;
