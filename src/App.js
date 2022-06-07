import { BrowserRouter , Route , Routes } from 'react-router-dom'
import { lazy , Suspense } from 'react';
import Loader from './Components/Loader';
import NavBar from './Components/NavBar';
import CssBaseline from '@mui/material/CssBaseline';
import {  ThemeProvider } from "@mui/material";
import { Theme } from './styles/Theme';

const Home = lazy(() =>  import('./Pages/Home') )
const Login = lazy(() =>  import('./Pages/Login') )
const Register = lazy(() =>  import('./Pages/Register') )
const NotFound = lazy( () => import('./Pages/NotFound') )
const Setup = lazy( () => import('./Pages/Setup') )
const Plans = lazy( () => import('./Pages/Plans') )
const ChoosePlan = lazy( () => import('./Pages/ChoosePlan') )
const CreditCard = lazy( () => import('./Pages/CreditCard') )
const EditProfiles = lazy( () => import('./Pages/ManageProfiles/EditProfile') )

const  App = () => {
  return (
     <>
     <ThemeProvider theme={Theme}>
    <CssBaseline />
    <Suspense fallback={<Loader />}>
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route  path='/' element={<Home />}  />
      <Route  path='/Home' element={<Home />}  />
      <Route  path='/Login' element={<Login />}  />
      <Route  path='/register' element={<Register />}  />
      <Route  path='/setup' element={<Setup />}  />
      <Route  path='/plan' element={<Plans />}  />
      <Route  path='/Chooseplan' element={<ChoosePlan />}  />
      <Route  path='/Creditcard' element={<CreditCard/>}  />
      <Route  path='/EditProfiles' element={<EditProfiles/>}  />
      <Route  path='*' element={<NotFound />}  />
    </Routes>
    </BrowserRouter>
    </Suspense>
    </ThemeProvider>
    </>
  );
}

export default App;
