import styled from 'styled-components';
import { Button, TextField, Container } from '@mui/material';

export const StyledContainer = styled(Container)`
  && {
    display: flex;
    width: 100%;
    padding: 0;
    max-width: 100%;
  }
`;

export const SideImageDiv = styled.div`
  display: flex;
  flex: 9;
  padding: 0;
  @media (max-width: 40em) {
    display: none;
  }
`;

export const StyledSideImage = styled.img`
  width: 100%;
  height: 100vh;
`;

export const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex: 5;
`;

export const StyledLogoImg = styled.img`
  max-width: 150px;
  margin-top: 30px;
  align-self: center;
`;

export const StyledForm = styled.form`
  display: flex;
  width: 90%;
  flex-direction: column;
  align-items: center;
  align-self: center;
`;

export const StyledUserTextField = styled(TextField)`
  &&{
    width: 100%;
    height: 40px;
    margin-top: 35px;
  }
`;

export const StyledPasswordTextField = styled(TextField)`
  && {
    width: 100%;
    height: 40px;
    margin-top: 55px;
  }
`;

export const StyledButton = styled(Button)`
  && {
    width: 100%;
    height: 40px;
    color: #505050;
    margin-top: 55px;
  }
`;