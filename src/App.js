
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Shared/Navbar';
import Footer from './Shared/Footer';
import { Route, Routes } from 'react-router-dom';
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
import Payment from './Pages/Dashboard/Payment';
import routes from "./routes/routes"
function App() {
  
  return (
    <div className='mx-2  lg:px-2  mb-8'>
      <Navbar></Navbar>
<Routes>

  {
    routes.map( ({path,Component},index)=><Route key={index} path={path} element={<Component/>}/>)
  }



<Route path='/purchage/:id' element={<RequireAuth>
  <Purchage/>
</RequireAuth>}></Route>
<Route path='dashboard' element={<RequireAuth>
  <Dashboard/>
</RequireAuth>}>
<Route index element={<Users/>}></Route>
<Route path='myorders' element={<RequireAuth>
  <Myorders/>
</RequireAuth>}></Route>
<Route path='payment/:id' element={<RequireAuth>
  <Payment/>
</RequireAuth>}></Route>
<Route path='dashboard/addreview' element={<RequireAuth>
  <Addreview/>
</RequireAuth>}></Route>
<Route path='users' element={<RequireAdmin>
  <Users/>
</RequireAdmin>}></Route>
<Route path='makeadmin' element={<RequireAdmin>
  <Users/>
</RequireAdmin>}></Route>
<Route path='addproduct' element={<RequireAdmin>
  <Addproduct/>
</RequireAdmin>}></Route>
<Route path='manageorders' element={<RequireAdmin>
  <ManageAllOrders/>
</RequireAdmin>}></Route>
<Route path='manageproducts' element={<RequireAdmin>
  <ManageProducts/>
</RequireAdmin>}></Route>

</Route>
<Route path='*' element={<NotFound/>}></Route>
  
</Routes>
<div>
 <Footer></Footer>

</div>

     <ToastContainer/>
    </div>
  );
}

export default App;
