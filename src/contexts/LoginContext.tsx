import React, {
  createContext, useState, ReactNode,
} from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

type User = {
  readonly id: number,
  readonly username: string,
  readonly firstName: string,
  readonly lastName: string,
  readonly gender: string,
  readonly email: string,
  readonly image: string,
}

type LoginContextProvider = {
  isLoading: Boolean;
  userInfo: User | undefined;
  userLogin: (username: string, password: string) => void;
  STORED_USER: string;
}

type LoginContextProviderProps = {
  children: ReactNode;
}

export const LoginContext = createContext({} as LoginContextProvider);

export function LoginContextProvider(props: LoginContextProviderProps) {
  const BASE_URL = 'https://dummyjson.com';
  const STORED_USER = '_USER';

  const { children } = props;
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState<User>();
  const [isLoading, setIsLoading] = useState(false);

  function userLogin(username: string, password: string) {
    setIsLoading(true);

    axios({
      method: 'post',
      url: `${BASE_URL}/auth/login`,
      headers: {},
      data: {
        username,
        password
      }

    }).then((result: any) => {
      const user = result.data;

      if (user) {
        setUserInfo({
          id: user.id,
          username: user.username,
          firstName: user.firstName,
          lastName: user.lastName,
          gender: user.gender,
          email: user.email,
          image: user.image,
        })
      }

      setIsLoading(false);
      navigate('/UserInfo');

    }).catch((e: any) => {
      toast.error('Ocorreu um erro, revise os dados e tente novamente', { position: 'bottom-right' });
      console.log("erro: ", e);
      setIsLoading(false);
    });

  };

  return (
    <LoginContext.Provider value={{
      isLoading, userInfo, userLogin, STORED_USER
    }}
    >
      {children}
    </LoginContext.Provider>
  );
}

export default LoginContext;