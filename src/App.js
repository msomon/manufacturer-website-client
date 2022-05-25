
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Shared/Navbar';
import Footer from './Shared/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Login/Login';
import SignUp from './Login/SignUp';
import Purchage from '../src/Pages/Home/Purchage'
import Dashboard from './Pages/Dashboard/Dashboard';
import Myorders from './Pages/Dashboard/Myorders';
import NotFound from './Pages/NotFound/NotFound';
function App() {
  
  return (
    <div className='mx-20'>
      <Navbar></Navbar>
<Routes>
<Route path='/' element={<Home/>}></Route>
<Route path='/home' element={<Home/>}></Route>
<Route path='/purchage/:id' element={<Purchage/>}></Route>
<Route path='/login' element={<Login/>}></Route>
<Route path='/signup' element={<SignUp/>}></Route>
<Route path='/dashboard' element={<Dashboard/>}></Route>
<Route path='/myorders' element={<Myorders/>}></Route>
<Route path='*' element={<NotFound/>}></Route>



  
</Routes>

      <Footer></Footer>
     <ToastContainer/>
    </div>
  );
}

export default App;
