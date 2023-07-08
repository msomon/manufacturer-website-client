import React from 'react';
import UseHooks from '../../Hooks/UseHooks';
import Product from './Product';

const ManageProducts = () => {
  const{tools,setTools}= UseHooks()
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-7 my-16'>
  
    {
      tools?.map(product=><Product key={product._id} setTools={setTools} product={product}></Product>)
    }
  </div>
  );
};

export default ManageProducts;