import React from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading';


const Tool = ({tool}) => {
  const {name,img,availableQuantity,minimumOrder,price,description,_id}= tool

  const navigate = useNavigate()

  if(!tool){
    return <Loading></Loading>
  }

  const purchagePage=(id)=>{
    navigate(`/purchage/${id}`)
   
  }



  return (
    <div data-aos="fade-up"
    data-aos-anchor-placement="top-bottom"
    data-aos-duration="1500" className="card max-w-md lg:h-[580px]  min-w-80  bg-base-100 shadow-xl ">
  <figure className="px-10 pt-1 ">
    <img src={img} alt="Shoes"  className="rounded-xl lg:w-[400px] h-[200px]" />
  </figure>
  <div className="card-body items-center ">
    <h2 className="card-title">Name: {name}</h2>
    <h2 className="card-title">Available Quantity: {availableQuantity}</h2>
    <h2 className="card-title">Minimum Order: {minimumOrder}</h2>
    <h2 className="card-title">Price: {price}</h2>
    <p className='flex-none'>Description: {description.slice(0,100)}</p>
    <div className="card-actions">
      <button onClick={()=> purchagePage(_id)} className="btn btn-primary mt-3">Buy Now</button>
    </div>
  </div>
</div>
  );
};

export default Tool;