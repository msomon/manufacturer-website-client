import React from 'react';

const allOrder = ({order,setOrders}) => {
  // console.log(order.email);
  const {name,email,user,img,quantity,price,totalPrice,description,_id}= order
  // console.log(order);

  const cancelAllOrder = id =>{
    
    const proceed = window.confirm('are you sure')
    if(proceed){
      // console.log('user id',id);
    const url = `https://electronics-manufecture-website.onrender.com/cancelallorder/${id}` ;

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
    <div className="card max-w-lg min-w-80 sm:mx-1 lg:mx-10 bg-base-100 shadow-xl lg:ml-10 ">
  <figure className="px-10 pt-5">
    <img src={img} alt="Shoes" className="rounded-xl h-[170px]" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Name: {user}</h2>
    <h2 className="card-title text-lg">Email: {email}</h2>
    <h2 className="card-title">Product Name: {name}</h2>
    <h2 className="card-title">Quantity: {quantity}</h2>
    <h2 className="card-title"> Price: {price}</h2>
    <h2 className="card-title">Total Price: {totalPrice}</h2>
 <button className='btn btn-secondary' onClick={()=>cancelAllOrder(_id)}>Cancel Order</button>
  </div>
</div>
  );
};

export default allOrder;