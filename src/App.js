
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
import RequireAuth from './Login/RequireAuth';
import Users from './Pages/Dashboard/Users';
import Addproduct from './Pages/Dashboard/Addproduct';
import Addreview from './Pages/Dashboard/Addreview';
import RequireAdmin from './Login/RequireAdmin';
import ManageAllOrders from './Pages/Dashboard/ManageAllOrders';
import ManageProducts from './Pages/Dashboard/ManageProducts';
import MyProfile from './Pages/Dashboard/MyProfile';
function App() {
  
  return (
    <div className='mx-20 mt-5'>
      <Navbar></Navbar>
<Routes>
<Route path='/' element={<Home/>}></Route>
<Route path='/home' element={<Home/>}></Route>
<Route path='/purchage/:id' element={<Purchage/>}></Route>
<Route path='/login' element={<Login/>}></Route>
<Route path='/signup' element={<SignUp/>}></Route>

<Route path='dashboard' element={<Dashboard/>}>
<Route index element={<MyProfile/>}></Route>
<Route path='dashboard/myorders' element={<RequireAuth>
  <Myorders/>
</RequireAuth>}></Route>
<Route path='dashboard/addreview' element={<RequireAuth>
  <Addreview/>
</RequireAuth>}></Route>
<Route path='dashboard/users' element={<RequireAdmin>
  <Users/>
</RequireAdmin>}></Route>
<Route path='dashboard/addproduct' element={<RequireAdmin>
  <Addproduct/>
</RequireAdmin>}></Route>
<Route path='dashboard/manageorders' element={<RequireAdmin>
  <ManageAllOrders/>
</RequireAdmin>}></Route>
<Route path='dashboard/manageproducts' element={<RequireAdmin>
  <ManageProducts/>
</RequireAdmin>}></Route>

</Route>
<Route path='*' element={<NotFound/>}></Route>



  
</Routes>

      <Footer></Footer>
     <ToastContainer/>
    </div>
  );
}

export default App;
