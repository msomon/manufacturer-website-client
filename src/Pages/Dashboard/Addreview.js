import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';

const Addreview = () => {
  const [user] = useAuthState(auth);
  const {admin} =useAdmin(user)
  const { register,reset,formState: { errors }, handleSubmit } = useForm();

  const onSubmit = data => {
    // console.log(data);
    const review = {
      email :user.email ,
      review : data.rating ,
      comment : data.comment
    }
    
    // console.log(review);

  const url ='http://localhost:5000/addreview';
       
       fetch(url,{
           method:'POST',
           headers:{
              'content-type': 'application/json'
           },
           body: JSON.stringify(review)
       })
       .then(res=>res.json())
       .then(resu=>{
           console.log(resu)
        reset()
           toast('add review confirm')
        })

      }


  return (
    <div className=' mx-auto card w-96 bg-base-100 shadow-xl px-6 mt-8 mb-8 pb-10'>
      <h1 className='mt-3 text-2xl mb-4 text-secondary'> 👍 Please Add Review 👍 </h1>
      <form className='flex flex-col gap-2 ' onSubmit={handleSubmit(onSubmit)}>
      <label class="label">
    <span class="label-text">User Email</span>
  </label>
      <input  type="text" readOnly value={user.email} placeholder="Type here user name" class="input input-bordered w-full max-w-xs" />
    
      <label class="label">
    <span class="label-text">Rating</span>
  </label>
      <input {...register("rating" ,{
         max:{
          value:'5',
      message:'× You Can Not Give Over 5 Star × '
  }
      })} type="number" placeholder="Type here rating" class="input input-bordered w-full max-w-xs"  required/>

      <label className="label">
      {errors.Rating?.type === 'max' && <span className="label-text-alt text-red-500">{errors.Rating.message}</span>}
       </label>

      <label class="label">
    <span class="label-text">Comment</span>
  </label>
      <input {...register("comment")} type="text" placeholder="Type here description" class="input input-bordered w-full max-w-xs" required />
     
     {
      admin && 
       <input className='btn btn-sm btn-primary w-40 mx-auto mb-8 mt-3 ' type="submit" value='Add Review' /> 

     }

    </form>
    </div>
  );
};

export default Addreview;