
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Shared/Navbar';
import Footer from './Shared/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Login/Login';
import SignUp from './Login/SignUp';

function App() {
  
  return (
    <div>
      <Navbar></Navbar>
<Routes>
<Route path='/' element={<Home/>}></Route>
<Route path='/home' element={<Home/>}></Route>
<Route path='/login' element={<Login/>}></Route>
<Route path='/signup' element={<SignUp/>}></Route>



  
</Routes>

      <h1>hallow</h1>
      <Footer></Footer>
     <ToastContainer/>
    </div>
  );
}

export default App;
