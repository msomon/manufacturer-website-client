
import Home from '../Pages/Home/Home'
import Blogs from '../Pages/Home/Blogs'
import Reviews from '../Pages/Home/Reviews'
import MyProfile from '../Pages/Home/MyProfile'
import UpdateMyProfile from '../Pages/Home/UpdateMyProfile'
import SignUp from '../Login/SignUp'
import Login from '../Login/Login'
import DashboardHome from '../Pages/Dashboard/DashboardHome'
 
const routes =[
    { path:"/",name:"Home",Component:Home },
    { path:"/blogs",name:"Blogs",Component:Blogs },
    { path:"/reviews",name:"Reviews",Component:Reviews},
    { path:"/dashboard",name:"DASHBOARD",Component:DashboardHome},
    { path:"/myprofile",name:"Myprofile",Component:MyProfile },
    { path:"/updatemyprofile",name:"Updatemyprofile",Component:UpdateMyProfile },
    { path:"/signUp",name:"SignUp",Component:SignUp },
    { path:"/login",name:"Login",Component:Login },
]

export default routes