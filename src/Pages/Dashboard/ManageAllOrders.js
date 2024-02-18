import React, { useEffect, useState } from 'react';
import useAdmin from '../../Hooks/useAdmin';
import AllOrder from './AllOrder'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const ManageAllOrders = () => {
  const [user] =useAuthState(auth)
  const {admin} =useAdmin()
  const [orders,setOrders] =useState([])
  useEffect(() => {
   
        fetch(`https://electronics-manufecture-website.onrender.com/allorders?email=${user?.email}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
          .then(res =>res.json())
            .then(data => {
       setOrders(data);
            });
   
}, [orders])



  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 mt-10 gap-4 mb-5 '>
      {
        orders?.map(order=><AllOrder key={order._id} setOrders={setOrders} order={order}></AllOrder>)
      }
    </div>
  );
};

export default ManageAllOrders;