import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className='text-2xl ml-4 font-bold text-purple-500'>Welcome <span className='text-primary'>{user?.displayName}</span> to your Dashboard</h2>
                
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to=""></Link></li>
            
                    
                    {
                     (user && !admin) && <>
                    <li><NavLink to='dashboard/myorders' >My Orders</NavLink></li>
                    <li><NavLink to="dashboard/addreview">Add Review</NavLink></li>
                        </>
                    }


                    { admin && <>
                    <li><Link to="dashboard/users">Users</Link></li>
                    <li><Link to="dashboard/makeadmin">Make Admin</Link></li>
                    <li><NavLink to="dashboard/addproduct">Add Product</NavLink></li>
                    <li><NavLink to="dashboard/manageorders">Manage All Orders</NavLink></li>
                    <li><NavLink to="dashboard/manageproducts">Manage All Products</NavLink></li>
                   
                    </>
                    
                    }
                    
                </ul>
               
            </div>
        </div>
    );
};

export default Dashboard;