import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import UpcomingProduct from './UpcomingProduct';

const UpcomingProducts = () => {

  const {data , isLoading} = useQuery('products',()=>
  fetch('parts.json').then(res=>res.json()) )
  if(isLoading){
    return <Loading></Loading>
  }

  return (
    <div>
      <h1 className='text-center text-3xl text-primary mt-3 mb-3'>OUR UPCOMING PRODUCTS </h1>
      <div className='grid lg:grid-cols-3 gap-5 mb-5'>
      {
        data?.map((product,index)=><UpcomingProduct key={index} product={product} ></UpcomingProduct> )
      }
    </div>
    </div>
  );
};

export default UpcomingProducts;