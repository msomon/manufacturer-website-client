import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading';

const Payment = () => {
  const{id} =useParams()
  const { register, formState: { errors }, handleSubmit } = useForm();

  const {data,isLoading}=useQuery(['order',id],()=>
  fetch(`http://localhost:5000/myorder/payment/${id}`,
  {
    method: 'GET',
    headers: {
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    }
}).then(res => res.json())
  )
 
  if(isLoading){
      return <Loading></Loading>
    }
    const {name,user,img,totalPrice ,_id}= data

const onSubmit=()=>{

}

// console.log(data);
  return (
    <div className='flex gap-5 flex-row mt-5 mb-5'>

<div class="card w-3/5 bg-base-100 shadow-xl ">
  <figure class="px-10 pt-10">
    <img src={img} alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">Hallow : {user}</h2>
    <h2 class="card-title">Please Pay For : {name}</h2>
    <h2 class="card-title">Total Price: {totalPrice}</h2>
  </div>
</div>

<div className='flex mt-0  justify-center  '>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>

              
                        <input className='btn w-full max-w-xs text-white' type="submit" value="Login" />
                    </form>
                    
                </div>
            </div>
        </div >

    </div>
  );
};

export default Payment;