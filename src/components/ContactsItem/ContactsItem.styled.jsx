import styled from '@emotion/styled';

export const ContactsItemContainer = styled.li`
  padding: 6px;
  width: 100%;
  height: 100px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.2);

  @media screen and (min-width: 768px) {
    padding: 10px;
  }
`;

export const ContactInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  @media screen and (min-width: 768px) {
    gap: 8px;
  }
`;

export const ContactTitle = styled.h1`
  font-size: 16px;
  margin-bottom: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 90px;

  @media screen and (min-width: 375px) {
    max-width: 150px;
  }

  @media screen and (min-width: 475px) {
    max-width: 250px;
  }

  @media screen and (min-width: 768px) {
    font-size: 24px;
    max-width: 300px;
  }
`;

export const ContactNumber = styled.p`
  font-size: 12px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`

export const ContactButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
