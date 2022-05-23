import React from 'react';
import UseHooks from '../../Hooks/UseHooks';
import Tool from './Tool'

const Home = () => {
  const {data} =UseHooks()
  // console.log(data);
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-7 my-16'>
  
      {
        data?.map(tool=><Tool key={tool._id} tool={tool}></Tool>)
      }
    </div>
  );
};

export default Home;