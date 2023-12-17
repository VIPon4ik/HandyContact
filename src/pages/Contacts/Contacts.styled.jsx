import styled from "@emotion/styled";
import { TextField } from "@mui/material";

export const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 auto;
  width: 100%;
  max-width: 600px;
  max-height: 85vh;
  overflow-y: scroll;
  padding: 10px;
`

export const FilterInput = styled(TextField)`
  background: #fff;
  width: 100%;
  max-width: 475px;
  margin: 0 auto;
  margin-bottom: 40px;
  display: block;
  & div {
    width: 100%;
  }
`