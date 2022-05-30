
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({data}) => {
  // console.log(data);
const stripe = useStripe()
const elements =useElements()
const[cardErr ,setCardErr] = useState('');
const[success ,setSuccess] = useState('');
const[processing ,setProcessing] = useState(false)
const[transactionId ,setTransactionId] = useState('');
const [clintSecret ,setClintSecret] = useState('');

const {totalPrice,_id ,user,email} = data ;

useEffect( ()=>{
  const url = 'https://sleepy-brook-79910.herokuapp.com/create-payment-intent'

  fetch(url,{
    method:'POST',
    headers:{
      'content-type':'application/json'
    },
    body:JSON.stringify({totalPrice})
  }) 
  .then(res=>res.json())
  .then(result=>{
    // console.log(result.clientSecret);
if(result?.clientSecret){
  setClintSecret(result?.clientSecret)
}

  })
 


},[totalPrice])


  const handleSubmit = async (e)=>{
    e.preventDefault()

    if(!stripe || !elements){
      return 
    }

    const card = elements.getElement(CardElement)
    if(card === null){
      return 
    }
    const {error , paymentMethod} = await stripe.createPaymentMethod({
      type: 'card' ,
      card 

    })
    // console.log(error);
    setCardErr(error ? error.message : '')
    setSuccess('')
    setProcessing(true)
    //  confirm card payment //
    const {paymentIntent, error:intentErr} = await stripe.confirmCardPayment(
      clintSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: user,
            email:email 
          },
        },
      },
    );
    if(intentErr){
      setCardErr(intentErr?.message)
      setSuccess('')
      setProcessing(false)
    }else{
      console.log(paymentIntent);
      setCardErr('')
      setTransactionId(paymentIntent?.id)
      setSuccess('Your Payment Is Completed')

      //  store payment in database  //
      const payment={
        bookingId : _id ,
        transactionId : paymentIntent.id
      }

      fetch(`https://sleepy-brook-79910.herokuapp.com/payment/${_id}`,{
        method:'PATCH',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(payment)

      }).then(res=>res.json())
      .then(datas=>{
        setProcessing(false)
        console.log(datas);
      })
    }

  }


  return (
    <>
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className='btn btn-success btn-sm mt-3' type="submit" disabled={!stripe || !clintSecret}>
        Pay
      </button>
      
    </form>
    { cardErr && <span className='text-red-500'>{cardErr}</span>}
    { success && <div className='text-green-500'>
      <p>{success}</p>
      <p>Your Transsaction Id : <span className='text-orange-600 text-bold'>{transactionId}</span> </p>
      </div>}
    </>
  );
};

export default CheckoutForm;