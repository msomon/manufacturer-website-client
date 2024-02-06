import React from 'react';

const Product = ({product ,setTools}) => {
  const {name,img,availableQuantity,minimumOrder,price,description,_id}=product

  const deleteallproduct = id =>{
    
    const proceed = window.confirm('are you sure')
    if(proceed){
      // console.log('user id',id);
    const url = `https://electronics-manufecture-website.onrender.com/deleteallproduct/${id}` ;

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
    <div className="card max-w-lg min-w-80 bg-base-100 shadow-xl ">
  <figure className="px-5 pt-2">
    <img src={img} alt="Shoes" className="rounded-xl h-[150px]" />
  </figure>
  <div className="card-body items-center text-center mt-0 pt-0">
    <h2 className="card-title">Name: {name}</h2>
    <h2 className="card-title">Available Quantity: {availableQuantity}</h2>
    <h2 className="card-title">Minimum Order: {minimumOrder}</h2>
    <h2 className="card-title">Price: {price}</h2>
    <p>Description: {description.slice(0,50)}</p>
    <div className="card-actions">
      <button className='btn btn-secondory' onClick={()=>deleteallproduct(_id)} >Delete Product</button>
    </div>
  </div>
</div>
  );
};

export default Product;