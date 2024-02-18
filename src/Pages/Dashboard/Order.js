import React from 'react';
import { Link } from 'react-router-dom';

const Order = ({order,setOrders}) => {
  const {name,user,email ,img,quantity,price,totalPrice,description,_id}= order

  const cancelOrder = id =>{
    
    const proceed = window.confirm('are you sure')
    if(proceed){
    const url = `https://electronics-manufecture-website.onrender.com/cancelorder/${id}` ;

    fetch(url,{
    method:'DELETE'
    })
    .then(data =>{
      if(data.deletedCount > 0){
        const remaining = order.filter(inventory => inventory._id !== id)
        setOrders(remaining)
      }
    })
    }
  }

  return (
    <div className="card w-full  bg-base-100 shadow-xl ">
  <figure className="px-10 pt-10">
    <img src={img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Name: {user}</h2>
    <h2 className="card-title">Email: {email}</h2>
    <h2 className="card-title">Product Name: {name}</h2>
    <h2 className="card-title">Quantity: {quantity}</h2>
    <h2 className="card-title"> Price: {price}</h2>
    <h2 className="card-title">Total Price: {totalPrice}</h2>
   {!order?.paid && <button className=' btn btn-primary' onClick={ ()=>cancelOrder(_id)}>Cancel Order</button>}

   {(order?.price && !order?.paid) && <Link to={`/dashboard/payment/${_id}`}><button className='btn btn-primary' >Pay</button></Link>}
   {(order?.price && order?.paid) && <span><button className='btn btn-outline text-bold text-2xl text-green-700' >Paid</button></span>}
   { order?.paid && <p className='text-green-600'> Yout Transaction Id :{order?.transactionId}</p>}
  </div>

</div>
  );
};

export default Order;