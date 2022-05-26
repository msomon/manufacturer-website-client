import React from 'react';

const allOrder = ({order,setOrders}) => {
  // console.log(order.email);
  const {name,email,user,img,quantity,price,totalPrice,description,_id}= order
  // console.log(order);

  const cancelAllOrder = id =>{
    
    const proceed = window.confirm('are you sure')
    if(proceed){
      // console.log('user id',id);
    const url = `http://localhost:5000/cancelallorder/${id}` ;

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
 <button className='btn btn-secondary' onClick={()=>cancelAllOrder(_id)}>Cancel Order</button>
  </div>
</div>
  );
};

export default allOrder;