import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton, InputAdornment } from '@mui/material';
import { FormEvent, useState } from 'react';
import { useContext } from 'react';
import { toast } from 'react-toastify';
import LoginContext from '../../contexts/LoginContext';

import BannerImg from '../../resources/banner_img.jpg';
import DartLogo from '../../resources/logo_img.png';

import {
  StyledContainer,
  StyledButton,
  StyledUserTextField,
  StyledPasswordTextField,
  SideImageDiv,
  StyledSideImage,
  StyledLogoImg,
  FormDiv,
  StyledForm,
} from './styles';

function Home() {
  const {
    isLoading, userLogin
  } = useContext(LoginContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    //"kminchelle", "0lelplR"

    if (username.trim() === '' || password.trim() === '') {
      toast.error('Usuário e senha são obrigatórios', { position: 'bottom-right' });
      return;
    }

    userLogin(username, password);
  }

  return (
    <StyledContainer>
      <SideImageDiv>
        <StyledSideImage src={BannerImg} alt="Ilustração" />
      </SideImageDiv>
      <FormDiv>
        <StyledLogoImg src={DartLogo} alt="Ilustração" />
        <StyledForm onSubmit={handleSubmit}>
          <StyledUserTextField
            helperText="Usuário é obrigatório"
            label="Usuário *"
            variant="outlined"
            disabled={!!isLoading}
            onChange={event => setUsername(event.target.value)}
          />
          <StyledPasswordTextField
            helperText="Senha é obrigatória"
            label="Senha *"
            variant="outlined"
            type={showPassword ? "text" : "password"}
            disabled={!!isLoading}
            onChange={event => setPassword(event.target.value)}
            InputProps={{ // <-- This is where the toggle button is added.
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    color='warning'
                    aria-label="Visualizar senha"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
          <StyledButton
            variant='contained'
            color='warning'
            type="submit"
            disabled={!!isLoading}
          >
            {!isLoading ? 'Continuar' : 'Aguarde...'}
          </StyledButton>
        </StyledForm>
      </FormDiv>
    </StyledContainer>
  )
}

export default Home;