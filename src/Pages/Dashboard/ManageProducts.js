import React from 'react';
import UseHooks from '../../Hooks/UseHooks';
import Product from './Product';

const ManageProducts = () => {
  const{tools,setTools}= UseHooks()
  return (
    <div className='grid lg:ml-5 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:my-16 sm:my-10'>
  
    {
      tools?.map(product=><Product key={product._id} setTools={setTools} product={product}></Product>)
    }
  </div>
  );
};

export default ManageProducts;