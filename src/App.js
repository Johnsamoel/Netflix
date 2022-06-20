import { BrowserRouter , Route , Routes } from 'react-router-dom'
import { lazy , Suspense } from 'react';
import Loader from './Components/Loader';
import NavBar from './Components/NavBar';
import CssBaseline from '@mui/material/CssBaseline';
import {  ThemeProvider } from "@mui/material";
import { Theme } from './styles/Theme';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AuthenticationSliceActions from './Redux/AuthenticationSlice';




const Home = lazy(() =>  import('./Pages/Home') )
const Login = lazy(() =>  import('./Pages/Login') )
const Register = lazy(() =>  import('./Pages/Register') )
const NotFound = lazy( () => import('./Pages/NotFound') )
const Setup = lazy( () => import('./Pages/Setup') )
const Plans = lazy( () => import('./Pages/Plans') )
const ChoosePlan = lazy( () => import('./Pages/ChoosePlan') )
const Payment = lazy( () => import('./Pages/Payment') )
const CreditCard = lazy( () => import('./Pages/CreditCard') )
const EditProfile = lazy( () => import('./Pages/ManageProfiles/EditProfile') )
const Profiles = lazy( () => import('./Pages/ManageProfiles/Profiles') )
const ManageProfile = lazy( () => import('./Pages/ManageProfiles/ManageProfile') )
const PlanDetails = lazy( () => import('./Pages/PlanDetails') )
<<<<<<< HEAD
const UpdateProfile =lazy(()=>import('./Pages/ManageProfiles/UpdateProfile')) 
=======
const Choosedevice = lazy ( () => import('./Pages/ChooseDevice') )
>>>>>>> 070e2bf85bd288e4489f1f6eff4059fe79d7d55a


const  App = () => {
  const Dispatch =  useDispatch()
useEffect(() => {
const tokenData = localStorage.getItem('token');

if(tokenData){
  Dispatch(AuthenticationSliceActions.logIn(tokenData))}

}, [Dispatch])



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
      <Route  path='/plandetails' element={<PlanDetails />}  />
      <Route  path='/plan' element={<Plans />}  />
      <Route  path='/Chooseplan' element={<ChoosePlan />}  />
      <Route  path='/Creditcard' element={<CreditCard/>}  />
      
      <Route  path='/Profiles' element={<Profiles/>}  />
      <Route  path='/EditProfile' element={<EditProfile/>}  />
      <Route  path='/ManageProfile' element={<ManageProfile/>}  />
      <Route  path='/UpdateProfile' element={<UpdateProfile/>}  />
      <Route  path='/payment' element={<Payment/>}  />
      <Route  path='/creditCard' element={<CreditCard/>}  />
      <Route  path='/choosedevice' element={<Choosedevice/>}  />
      <Route  path='*' element={<NotFound />}  />
    </Routes>
    </BrowserRouter>
    </Suspense>
    </ThemeProvider>
    </>
  );
}

export default App;
