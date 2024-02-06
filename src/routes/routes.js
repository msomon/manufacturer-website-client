import React from 'react'
import Home from '../Pages/Home/Home'
import Blogs from '../Pages/Home/Blogs'
import Reviews from '../Pages/Home/Reviews'
import MyProfile from '../Pages/Home/MyProfile'
import MyPortfolio from '../Pages/Home/MyPortfolio'
import BusinessSummary from '../Pages/Home/BusinessSummary'
import UpdateMyProfile from '../Pages/Home/UpdateMyProfile'
import SignUp from '../Login/SignUp'
import Login from '../Login/Login'
 
const routes =[
    { path:"/",name:"Home",Component:Home },
    { path:"/home",name:"Home",Component:Home },
    { path:"/blogs",name:"Blogs",Component:Blogs },
    { path:"/reviews",name:"Reviews",Component:Reviews},
    { path:"/myprofile",name:"Myprofile",Component:MyProfile },
    { path:"/myportfolio",name:"Myportfolio",Component:MyPortfolio },
    { path:"/businesssummary",name:"Businesssummary",Component:BusinessSummary },
    { path:"/updatemyprofile",name:"Updatemyprofile",Component:UpdateMyProfile },
    { path:"/signUp",name:"SignUp",Component:SignUp },
    { path:"/login",name:"Login",Component:Login },
]

export default routes