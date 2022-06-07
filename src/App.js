
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
import MyProfile from './Pages/Home/MyProfile';
import Reviews from './Pages/Home/Reviews';
import DashboardHome from './Pages/Dashboard/DashboardHome';
import MyPortfolio from './Pages/Home/MyPortfolio';
import UpdateMyProfile from './Pages/Home/UpdateMyProfile';
import BusinessSummary from './Pages/Home/BusinessSummary';
import Payment from './Pages/Dashboard/Payment';
import Blogs from './Pages/Home/Blogs';
import UpcomingProducts from './Pages/Home/UpcomingProducts';
function App() {
  
  return (
    <div className='lg:mx-20 px-10 mt-5 xs:mx-5 xs:px-3'>
      <Navbar></Navbar>
<Routes>
<Route path='/' element={<Home/>}></Route>
<Route path='/home' element={<Home/>}></Route>
<Route path='/blogs' element={<Blogs/>}></Route>
<Route path='/upcomingproduct' element={<UpcomingProducts/>}></Route>
<Route path='/myportfolio' element={<MyPortfolio/>}></Route>
<Route path='/businesssummary' element={<BusinessSummary/>}></Route>
<Route path='/myProfile' element={<MyProfile/>}></Route>
<Route path='/updatemyprofile' element={<UpdateMyProfile/>}></Route>
<Route path='/purchage/:id' element={<RequireAuth>
  <Purchage/>
</RequireAuth>}></Route>
<Route path='/login' element={<Login/>}></Route>
<Route path='/signup' element={<SignUp/>}></Route>
<Route path='/reviews' element={<Reviews/>}></Route>

<Route path='dashboard' element={<RequireAuth>
  <Dashboard/>
</RequireAuth>}>
<Route index element={<DashboardHome/>}></Route>
<Route path='dashboard/myorders' element={<RequireAuth>
  <Myorders/>
</RequireAuth>}></Route>
<Route path='payment/:id' element={<RequireAuth>
  <Payment/>
</RequireAuth>}></Route>
<Route path='dashboard/addreview' element={<RequireAuth>
  <Addreview/>
</RequireAuth>}></Route>
<Route path='dashboard/users' element={<RequireAdmin>
  <Users/>
</RequireAdmin>}></Route>
<Route path='dashboard/makeadmin' element={<RequireAdmin>
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
