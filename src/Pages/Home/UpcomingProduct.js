import React from 'react';

const UpcomingProduct = ({product}) => {
  const {img,name,description}= product
  return (
    <div className="card w-full  bg-base-100 shadow-xl ">
  <figure className="px-10 pt-10">
    <img src={img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Name: {name}</h2>
    <p>Description: {description}</p>
    <div className="card-actions">
    </div>
  </div>
</div>
  );
};

export default UpcomingProduct;