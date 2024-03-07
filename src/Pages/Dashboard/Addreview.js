import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';
import { Rating } from 'primereact/rating';

const Addreview = () => {
  const [user] = useAuthState(auth);
  const {admin} =useAdmin(user)
  const { register,reset,formState: { errors }, handleSubmit } = useForm();
   const [value,setValue] =useState()


  const onSubmit = data => {
    

    const review = {
      email :user.email ,
      review : value ,
      comment : data.comment
    }
    
  

  const url ='https://electronics-manufecture-website.onrender.com/addreview';
       
       fetch(url,{
           method:'POST',
           headers:{
              'content-type': 'application/json'
           },
           body: JSON.stringify(review)
       })
       .then(res=>res.json())
       .then(res=>{
        reset()
           toast('add review confirm')
        })

      }


  return (
    <div className=' mx-auto card max-w-lg min-w-80  bg-base-100 shadow-xl px-6 mt-8 mb-8 pb-10 flex justify-center items-center'>
      <h1 className='mt-3 text-2xl mb-4 text-secondary'> 👍 Please Add Review 👍 </h1>
      <form className='flex flex-col gap-2 ' onSubmit={handleSubmit(onSubmit)}>
      <label className="label">
    <span className="label-text">User Email</span>
  </label>
      <input  type="text" readOnly value={user.email} placeholder="Type here user name" className="input input-bordered w-full max-w-xs" />
    
      <label className="label">
    <span className="label-text">Rating</span>
  </label>


<span className=''>

<Rating className='gap-3 font-bold h-14 p-3  text-3xl text-yellow-600 ml-4'  value={value} onChange={(e) => setValue(e.target.value) } cancel={false} />

</span>
  

      <label className="label">
    <span className="label-text">Comment</span>
  </label>
      <input {...register("comment")} type="text" placeholder="Type here description" className="input input-bordered w-full max-w-xs" required />
     
     {
      !admin && 
       <input className='btn btn-sm btn-primary w-40 mx-auto mb-8 mt-3 ' type="submit" value='Add Review' /> 

     }

    </form>
    </div>
  );
};

export default Addreview;