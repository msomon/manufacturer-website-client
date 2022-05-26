import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../firebase.init';

const Navbar = () => {

    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
        // localStorage.removeItem('accessToken');
    };

    const menuItems = <>
        <li><NavLink to="/home">Home</NavLink></li>
        <li><NavLink to="/blogs">Blogs</NavLink></li>
        <li><NavLink to="/reviews">Reviews</NavLink></li>
        <li><NavLink to="/myportfolio">My Portfolio</NavLink></li>
        <li><NavLink to="/myprofile">My Profile</NavLink></li>
        {
            user &&  <li><NavLink to="/dashboard">Dashboard</NavLink></li>
        }
        <li><NavLink to="/businesssummary">Bussiness Summary</NavLink></li>
        <li>{user ? <button className="btn btn-ghost text-xl" onClick={logout} >Sign Out</button> : <NavLink to="/login">Login</NavLink>}</li>
        <p className='rounded-lg mx-6 mt-2'>{user?.email}</p>
    </>
    return (
        <div className="navbar bg-base-100 ">
            <div className="navbar-start text-2xl mx-auto">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>MANUBAR
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-62">
                        {menuItems}
                    </ul>
                </div>
            
            </div>
                
            <div className="navbar-center mx-auto hidden lg:flex text-xl mb-4">
                <ul className="menu menu-horizontal p-0 ">
                    {menuItems}
                </ul>

            </div>
                
            {
         user &&  <label for="dashboard-sidebar" class="btn btn-secondary drawer-button lg:hidden">Dashboard</label>
         
            }
              
        </div>
    );
};

export default Navbar;