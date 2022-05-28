// import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
// import React, { useEffect, useState } from 'react';

// const CheckoutForm = ({totalPrice}) => {
//   const stripe = useStripe();
//   const elements = useElements();
// const [cardErr ,setCardErr] = useState('')
// const [clintSecret ,setClintSecret] = useState('');

// useEffect(() => {
//   fetch('http://localhost:5000/create-payment-intent', {
//       method: 'POST',
//       headers: {
//           'content-type': 'application/json',
//           'authorization': `Bearer ${localStorage.getItem('accessToken')}`
//       },
//       body: JSON.stringify(totalPrice )
//   })
//       .then(res => res.json())
//       .then(data => {
//         console.log(data);
//           if (data?.clientSecret) {
//             setClintSecret(data.clientSecret);
//           }
//       });

// }, [totalPrice])


//   const handleSubmit = async (e)=>{
//   e.preventDefault()
//  if (!stripe || !elements) {
     
//       return;
//     }
//     const card = elements.getElement(CardElement);

//     if (card == null) {
//       return;
//     }
// const {error,paymentMethod} = await stripe.createPaymentMethod({
//   type:'card' ,
//   card
// })


// setCardErr(error?.message || '')

//   }


//   return (
//     <>
//     <form onSubmit={handleSubmit}>
//       <CardElement
//         options={{
//           style: {
//             base: {
//               fontSize: '16px',
//               color: '#424770',
//               '::placeholder': {
//                 color: '#aab7c4',
//               },
//             },
//             invalid: {
//               color: '#9e2146',
//             },
//           },
//         }}
//       />
//       <button type="submit" disabled={!stripe || !clintSecret}>
//         Pay
//       </button>
//     </form>
//     {
//       cardErr && <p className='text-red-500'>{cardErr}</p> 
//     }
//     </>
//   );
// };

// export default CheckoutForm;