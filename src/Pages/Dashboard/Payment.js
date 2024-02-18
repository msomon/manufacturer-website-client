import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L44ajDHVcHNosnNxn4BUHtQTdQdnfNCjZfNhJI7GyEIgMauYiQ533fND4NnT0M7Abm5mBC9KUiuqcSMDpGeZNAJ00Imp6BOkW');

const Payment = () => {
  const {id} =useParams()

  const url =`https://electronics-manufecture-website.onrender.com/myorder/payment/${id}`

  const {data,isLoading}=useQuery(['order',id],()=>fetch(url).then(res=>res.json()))
  
if(isLoading){
  return <Loading></Loading>
}


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

<div class="card  w-full  shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm data={data} />
                    </Elements>
                </div>
            </div>
    </div>
  );
};

export default Payment;