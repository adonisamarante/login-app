import { CssBaseline } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import MainRoutes from './mainRoutes';

import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <CssBaseline />
      <ToastContainer />

      <MainRoutes />
    </>
  );
}

export default App;
