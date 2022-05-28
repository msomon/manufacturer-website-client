import React from 'react';
import { Link } from 'react-router-dom';

const Order = ({order,setOrders}) => {
  const {name,user,email,img,quantity,price,totalPrice,description,_id}= order
  // console.log(order);

  const cancelOrder = id =>{
    
    const proceed = window.confirm('are you sure')
    if(proceed){
      // console.log('user id',id);
    const url = `http://localhost:5000/cancelorder/${id}` ;

    fetch(url,{
    method:'DELETE'
    })
    .then(data =>{
      if(data.deletedCount > 0){
        const remaining = order.filter(inventory => inventory._id !== id)
        console.log(remaining);
        setOrders(remaining)
      }
    })
    }
  }


const paid ='true'
  // console.log(order);
  return (
    <div class="card w-full  bg-base-100 shadow-xl ">
  <figure class="px-10 pt-10">
    <img src={img} alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">Name: {user}</h2>
    <h2 class="card-title">Email: {email}</h2>
    <h2 class="card-title">Product Name: {name}</h2>
    <h2 class="card-title">Quantity: {quantity}</h2>
    <h2 class="card-title"> Price: {price}</h2>
    <h2 class="card-title">Total Price: {totalPrice}</h2>
   { !paid && <button className='btn btn-primary' onClick={ ()=>cancelOrder(_id)}>Cancel Order</button>}
   {(order?.price && paid) && <Link to={`/dashboard/payment/${_id}`}><button className='btn btn-primary' >Pay</button></Link>}
   {(order?.price && !paid) && <span><button className='btn btn-primary' >Paid</button></span>}
  </div>

</div>
  );
};

export default Order;