import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const Addproduct = (event) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data)
    const url = 'http://localhost:5000/addproduct'
    fetch(url,{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(data)
    }) 
    .then(res=>res.json())
    .then(result=>console.log(result))
    toast('Add Item Succesfully')
  
  }


  return (
    <div className=' mx-auto card w-96 bg-base-100 shadow-xl px-6 mt-8'>
      <h1 className='mt-3 text-2xl mb-4 text-secondary'> 🎁 Please Add Product 🎁 </h1>
      <form className='flex flex-col gap-2 ' onSubmit={handleSubmit(onSubmit)}>
      <label class="label">
    <span class="label-text">Product Name</span>
  </label>
      <input {...register("name")} type="text" placeholder="Type here product name" class="input input-bordered w-full max-w-xs" />
      <label class="label">
    <span class="label-text">Product Image Url</span>
  </label>
      <input {...register("img")} type="text" placeholder="Type here Photo Url" class="input input-bordered w-full max-w-xs" />
      <label class="label">
    <span class="label-text">Product AvailableQuantity</span>
  </label>
      <input {...register("availableQuantity")} type="number" placeholder="Type here availableQuantity" class="input input-bordered w-full max-w-xs" />
      <label class="label">
    <span class="label-text">Product MinimumOrder</span>
  </label>
      <input {...register("minimumOrder")} type="number" placeholder="Type here minimumOrder" class="input input-bordered w-full max-w-xs" />
      <label class="label">
    <span class="label-text">Product Price</span>
  </label>
      <input {...register("price")} type="number" placeholder="Type here price" class="input input-bordered w-full max-w-xs" />
      <label class="label">
    <span class="label-text">Product Description</span>
  </label>
      <input {...register("description")} type="text" placeholder="Type here description" class="input input-bordered w-full max-w-xs" />
      <input className='btn btn-sm btn-primary w-40 mx-auto mb-4' type="submit" value='Add Product' />
    </form>
    </div>
  );
};

export default Addproduct;