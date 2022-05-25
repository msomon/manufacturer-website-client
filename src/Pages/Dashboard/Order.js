import React from 'react';

const Order = ({order}) => {
  // const {name,img,availableQuantity,minimumOrder,price,description,_id}= order
  console.log(order);
  return (
    <div class="card w-full  bg-base-100 shadow-xl ">
  {/* <figure class="px-10 pt-10">
    <img src={img} alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">Name: {name}</h2>
    <h2 class="card-title">Available Quantity: {availableQuantity}</h2>
    <h2 class="card-title">Minimum Order: {minimumOrder}</h2>
    <h2 class="card-title">Price: {price}</h2>
    <p>Description: {description}</p>
  </div> */}
</div>
  );
};

export default Order;