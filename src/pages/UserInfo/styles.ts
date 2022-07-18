import { Container } from '@mui/material';
import styled from 'styled-components';

export const StyledContainer = styled(Container)`
  && {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    padding: 0;
    max-width: 100%;
  }
`;

export const StyledHeader = styled.header`
  height: 60px;
  width: 60%;
  background-color: #f5f5f5;
  padding: 0 20px;
  @media (max-width: 40em) {
    width: 100%;
  }
`;

export const StyledBody = styled.body`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 60%;
  height: 100%;
  background-color: #f5f5f5;
  @media (max-width: 40em) {
    width: 100%;
  }
`;

export const StyledDiv = styled.div`
  display: inline-block;
  text-align: left;
`;

export const StyledP = styled.p`
  color: #505050;
`;