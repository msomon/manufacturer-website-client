import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Order from './Order';

const Myorders = () => {
  const [user]=useAuthState(auth)
  const [orders,setOrders] =useState([])
  useEffect(() => {
    if (user) {
        fetch(`http://localhost:5000/myorders?email=${user.email}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
          .then(res =>res.json())
            .then(data => {
     console.log(data);
       setOrders(data);
            });
    }
}, [user])



  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 mt-7 gap-5'>
      {
        orders?.map(order=><Order key={order._id} order={order}></Order>)
      }
    </div>
  );
};

export default Myorders;