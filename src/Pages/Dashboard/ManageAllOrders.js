import React, { useEffect, useState } from 'react';
import useAdmin from '../../Hooks/useAdmin';
import AllOrder from './AllOrder'

const ManageAllOrders = () => {
  const {admin} =useAdmin()
  const [orders,setOrders] =useState([])
  useEffect(() => {
   
        fetch('http://localhost:5000/allorders', {
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
   
}, [admin])



  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 ml-5 mt-7 gap-4'>
      {
        orders?.map(order=><AllOrder key={order._id} order={order}></AllOrder>)
      }
    </div>
  );
};

export default ManageAllOrders;