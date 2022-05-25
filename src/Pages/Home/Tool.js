import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({tool}) => {
  const {name,img,availableQuantity,minimumOrder,price,description,_id}= tool
  const navigate = useNavigate()

  const purchagePage=(id)=>{
//  console.log(id);
    navigate(`/purchage/${id}`)
    // navigate(`/purchage/${id}`)

  }
  return (
    <div class="card w-full  bg-base-100 shadow-xl ">
  <figure class="px-10 pt-10">
    <img src={img} alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">Name: {name}</h2>
    <h2 class="card-title">Available Quantity: {availableQuantity}</h2>
    <h2 class="card-title">Minimum Order: {minimumOrder}</h2>
    <h2 class="card-title">Price: {price}</h2>
    <p>Description: {description}</p>
    <div class="card-actions">
      <button onClick={()=> purchagePage(_id)} class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
  );
};

export default Tool;