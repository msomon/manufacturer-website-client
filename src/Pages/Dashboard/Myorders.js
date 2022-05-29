import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Order from './Order';

const Myorders = () => {
  const [user]=useAuthState(auth)
  const [orders,setOrders] =useState([])

  useEffect(() => {

    if (user) {
        fetch(`https://sleepy-brook-79910.herokuapp.com/myorders?email=${user.email}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
          .then(res =>res.json())
            .then(data => {
    //  console.log(data);
       setOrders(data);
            });
    }
}, [orders])



  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 ml-5 mt-7 gap-5 mb-5'>
      {
        orders?.map(order=><Order setOrders={setOrders} key={order._id} order={order}></Order>)
      }
    </div>
  );
};

export default Myorders;