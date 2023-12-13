import styled from '@emotion/styled';

export const HomeGridContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 1px 1px 2px 1px rgba(0,0,0,0.2);
  height: 600px;
  max-width: 1240px;
  margin: 0 auto;
`;

export const HomeLeftSection = styled.section`
  padding: 100px;
  max-width: 550px;
`;

export const HomeRightSection = styled.section`
  padding: 40px;
  max-width: 558px;
  background: gray;
`;

export const HomeTitle = styled.h1`
  font-size: 28px;
  color: #212121;
  margin-bottom: 20px;
  line-height: 1.5;
`;

export const HomeTitleSpan = styled.span`
  font-size: 50px;

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
`