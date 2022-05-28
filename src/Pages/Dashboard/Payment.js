// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { useQuery } from 'react-query';
// import { useParams } from 'react-router-dom';
// import Loading from '../../Shared/Loading';
// import CheckoutForm from './CheckoutForm';

// const stripePromise = loadStripe('pk_test_51L44ajDHVcHNosnNxn4BUHtQTdQdnfNCjZfNhJI7GyEIgMauYiQ533fND4NnT0M7Abm5mBC9KUiuqcSMDpGeZNAJ00Imp6BOkW');

// const Payment = () => {
//   const{id} =useParams()
//   const { register, formState: { errors }, handleSubmit } = useForm();

//   const {data,isLoading}=useQuery(['order',id],()=>
//   fetch(`http://localhost:5000/myorder/payment/${id}`,
//   {
//     method: 'GET',
//     headers: {
//         'authorization': `Bearer ${localStorage.getItem('accessToken')}`
//     }
// }).then(res => res.json())
//   )
 
//   if(isLoading){
//       return <Loading></Loading>
//     }
//     const {name,user,img,totalPrice ,_id}= data

// const onSubmit=()=>{

// }

// // console.log(data);
//   return (
//     <div className='grid gap-5 grid-cols-2 justify-evenly mt-5 mb-5'>

// <div class="card w-full bg-base-100 shadow-xl ">
//   <figure class="px-10 pt-10">
//     <img src={img} alt="Shoes" class="rounded-xl" />
//   </figure>
//   <div class="card-body items-center text-center">
//     <h2 class="card-title">Name : {user}</h2>
//     <h2 class="card-title">Please Pay For : {name}</h2>
//     <h2 class="card-title">Total Price: {totalPrice}</h2>
//   </div>
// </div>

// <div className='flex mt-0 w-full justify-center  '>
//             <div className="card w-96 bg-base-100 shadow-xl">
//                 <div className="card-body">
//                 <Elements stripe={stripePromise}>
//     <CheckoutForm totalPrice={totalPrice} />
//   </Elements>
                    
//                 </div>
//             </div>
//         </div >

//     </div>
//   );
// };

// export default Payment;