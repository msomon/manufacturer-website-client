import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../firebase.init';
const Navbar = () => {
    

    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    };

    const menuItems = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/blogs">Blogs</NavLink></li>
        <li><NavLink to="/reviews">Reviews</NavLink></li>
        <li><NavLink to="/myprofile">My Profile</NavLink></li>
        {
            user &&  <li className='sm:hidden lg:block'><NavLink  to="/dashboard">Dashboard</NavLink></li>
        }
        

        <li>{user ? <button className="btn font-bold btn-ghost mt-1 text-[16px]" onClick={logout} >Sign Out</button> : <NavLink to="/login">Login</NavLink>}</li>
        {/* <p className='rounded-lg mx-2 mt-3 lg:text-base sm:text-xs'>{user?.email}</p> */}
    </>
    return (
        <div className="navbar bg-green-300 w-full">
            <div className="navbar-start text-2xl mx-auto">
                <div className="dropdown ">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>MANUBAR
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-blue-300 rounded-box w-full">
                        {menuItems}
                    </ul>
                </div>
            
            </div>
                
            <div className="navbar-center mx-auto hidden lg:flex text-xl mb-1">
                <ul className="menu menu-horizontal p-0 ">
                    {menuItems}
                </ul>

            </div>

           
        </div>
    );
};

export default Navbar;