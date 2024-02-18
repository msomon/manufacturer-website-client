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
    <div className=' '>
      <h1 className=' text-center  text-4xl text-primary mt-3 mb-4'>OUR UPCOMING PRODUCTS </h1>

      <div className='grid lg:grid-cols-3 md:grid-cols-2 lg:gap-0 gap-5 mb-5  lg:w-[1300px] md:w-[770px] sm:w-[300px] lg:mx-auto'>
      {
        data?.map((product,index)=><UpcomingProduct key={index} product={product} ></UpcomingProduct> )
      }
    </div>
    </div>
  );
};

export default UpcomingProducts;