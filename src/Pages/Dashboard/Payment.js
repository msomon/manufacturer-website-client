import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading';

const Payment = () => {
  const {id} =useParams()

  const url =`http://localhost:5000/myorder/payment/${id}`

  const {data,isLoading}=useQuery(['order',id],()=>fetch(url).then(res=>res.json()))
  
if(isLoading){
  return <Loading></Loading>
}

console.log(data);

  return (
    <div className='min-h-screen grid lg:grid-cols-2 gap-4 mb-5 mt-3'>
     <div class="card w-full bg-base-100 shadow-xl">
  <figure class="px-10 pt-10">
    <img src={data?.img} alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">Pay For :{data.name}</h2>
    <p>Please Pay :${data?.totalPrice}</p>
    
  </div>
</div>

     <div className='card w-full bg-base-100 shadow-xl'>
     <div class="card-body items-center text-center">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    </div>

     </div>
    </div>
  );
};

export default Payment;