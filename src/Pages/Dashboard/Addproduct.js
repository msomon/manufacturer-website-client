import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const Addproduct = (event) => {
  const { register,reset, handleSubmit } = useForm();
   const imageStoreKey ='f856352aa0a1ba19f08a23b95d1772df' 


  const onSubmit =async (data) => {
    // console.log(data)

const image = data.img[0]
const formData = new FormData()
formData.append('image', image);
const imgUrl =`https://api.imgbb.com/1/upload?key=${imageStoreKey}` ;

fetch(imgUrl, {
  method: 'POST',
  body:formData
})
.then(res=>res.json())
.then(result=>{
  if(result.success){
    const image = result.data.url 
    const product = {
      name :data.name ,
      img: image ,
      availableQuantity : data.availableQuantity ,
      minimumOrder : data.minimumOrder ,
      price : data.price ,
      description : data.description
    }
    // console.log(product);
    const url = 'https://electronics-manufecture-website.onrender.com/addproduct'
    fetch(url,{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(product)
    }) 
    .then(res=>res.json())
    .then(insert=>{
      if(insert.insertedId){
        reset()
        toast.success('Add Item Succesfully')
      }
      else{
        toast.error('Failed to add ptoduct')
      }
    })
  }
  
})

    
  }


  return (
    <div className='h-80vh mx-auto card lg:w-[550px] md:w-[320px] sm:w-[320px]  bg-base-100 shadow-xl px-6 mt-8 mb-10'>
      <h1 className='mt-3 text-2xl mb-4 text-secondary'> 🎁 Please Add Product 🎁 </h1>
      <form className='flex flex-col gap-2 ' onSubmit={handleSubmit(onSubmit)}>
      <label className="label">
    <span className="label-text">Product Name</span>
  </label>
      <input {...register("name")} type="text" placeholder="Type here product name" className="input input-bordered w-full max-w-xs" />
      <label className="label">
    <span className="label-text">Product Image Url</span>
  </label>
      <input {...register("img")} type="file" placeholder="Type here Photo Url" className="input input-bordered w-full max-w-xs" />
      <label className="label">
    <span className="label-text">Product AvailableQuantity</span>
  </label>
      <input {...register("availableQuantity")} type="number" placeholder="Type here availableQuantity" className="input input-bordered w-full max-w-xs" />
      <label className="label">
    <span className="label-text">Product MinimumOrder</span>
  </label>
      <input {...register("minimumOrder")} type="number" placeholder="Type here minimumOrder" className="input input-bordered w-full max-w-xs" />
      <label className="label">
    <span className="label-text">Product Price</span>
  </label>
      <input {...register("price")} type="number" placeholder="Type here price" className="input input-bordered w-full max-w-xs" />
      <label className="label">
    <span className="label-text">Product Description</span>
  </label>
      <input {...register("description")} type="text" placeholder="Type here description" className="input input-bordered w-full max-w-xs" />
      <input className='btn btn-sm btn-primary w-40 mx-auto mb-7 mt-3' type="submit" value='Add Product' />
    </form>
    </div>
  );
};

export default Addproduct;