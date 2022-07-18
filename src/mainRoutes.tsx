import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginContextProvider } from './contexts/LoginContext';

import Home from './pages/Home';
import UserInfo from './pages/UserInfo';

const MainRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <LoginContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/UserInfo/" element={<UserInfo />} />
          </Routes>
        </LoginContextProvider>
      </BrowserRouter>
    </>
  )
}

export default MainRoutes;