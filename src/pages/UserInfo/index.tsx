import { Avatar } from '@mui/material';
import { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoginContext from '../../contexts/LoginContext';
import { StyledBody, StyledContainer, StyledHeader, StyledDiv, StyledP } from './styles';

function UserInfo() {
  const {
    userInfo
  } = useContext(LoginContext);

  const navigate = useNavigate();
  useEffect(() => {
    if (!userInfo) {
      navigate('/');
    }
  }, []);

  return (
    <StyledContainer>
      <StyledHeader>
        <p><Link to="/">voltar</Link></p>
      </StyledHeader>
      <StyledBody>
        <Avatar
          src={userInfo?.image}
          sx={{ width: 200, height: 200, marginBottom: 5, marginTop: 5 }}
        />
        <StyledDiv>
          <StyledP>{`Username: ${userInfo?.username}`}</StyledP>
          <StyledP>{`Nome: ${userInfo?.firstName} ${userInfo?.lastName}`}</StyledP>
          <StyledP>{`Sexo: ${userInfo?.gender}`}</StyledP>
          <StyledP>{`Email: ${userInfo?.email}`}</StyledP>
        </StyledDiv>
      </StyledBody>
    </StyledContainer>
  )
}

export default UserInfo;