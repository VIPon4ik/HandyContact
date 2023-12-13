import styled from "@emotion/styled";

export const ContactsItemContainer = styled.li`
  padding: 10px;
  width: 100%;
  height: 100px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 1px 1px 2px 1px rgba(0,0,0,0.2);
`

export const ContactInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const ContactTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 28vw;
  max-width: 300px;
`

export const ContactButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`