import React from 'react';
import UseHooks from '../../Hooks/UseHooks';
import Product from './Product';

const ManageProducts = () => {
  const{data}= UseHooks()
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-7 my-16'>
  
    {
      data?.map(product=><Product key={product._id} product={product}></Product>)
    }
  </div>
  );
};

export default ManageProducts;