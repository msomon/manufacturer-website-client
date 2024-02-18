import React from 'react';
import Loading from '../../Shared/Loading';

const UpcomingProduct = ({product}) => {
  const {img,name,description}= product ;

  if(!product){
    return <Loading></Loading>
  }

  
  return (
    <div  data-aos="flip-left"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="3000" className="card  lg:w-[350px] md:w-[340px] sm:w-[280px] bg-base-100 shadow-xl justify-center items-center lg:mx-auto">
  <figure className="px-10 pt-10">
    <img src={img} alt="Shoes" className="rounded-xl h-[200px]" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Name: {name}</h2>
    <p>Description: {description.slice(0,80)}</p>
    <div className="card-actions">
    </div>
  </div>
</div>
  );
};

export default UpcomingProduct;