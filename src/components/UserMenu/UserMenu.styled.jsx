import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const LimitedButton = styled(Button)`
  @media screen and (max-width: 650px) {
    display: block;
    width: 120px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: left;
  }
`;
