import React from 'react';

const Product = ({product ,setTools}) => {
  const {name,img,availableQuantity,minimumOrder,price,description,_id}=product

  const deleteallproduct = id =>{
    
    const proceed = window.confirm('are you sure')
    if(proceed){
      // console.log('user id',id);
    const url = `http://localhost:5000/deleteallproduct/${id}` ;

    fetch(url,{
    method:'DELETE'
    })
    .then(data =>{
      if(data.deletedCount > 0){
        const remaining = product.filter(inventory => inventory._id !== id)
        // setOrders(remaining)
        setTools(remaining)
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
    <h2 class="card-title">Name: {name}</h2>
    <h2 class="card-title">Available Quantity: {availableQuantity}</h2>
    <h2 class="card-title">Minimum Order: {minimumOrder}</h2>
    <h2 class="card-title">Price: {price}</h2>
    <p>Description: {description}</p>
    <div class="card-actions">
      <button className='btn btn-secondory' onClick={()=>deleteallproduct(_id)} >Delete Product</button>
    </div>
  </div>
</div>
  );
};

export default Product;