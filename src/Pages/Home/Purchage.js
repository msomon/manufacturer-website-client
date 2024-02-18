
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading';

const Purchage = () => {
  const {id} = useParams()
  const { register,reset ,formState: { errors }, handleSubmit } = useForm();
  const [user] =useAuthState(auth)
//   const [quantity,setQuantity]= useState(false)
  
  const {data,isLoading}=useQuery('tool',()=>
  fetch(`https://electronics-manufecture-website.onrender.com/tools/${id}`,
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


    const { availableQuantity,minimumOrder,price ,img,description,name} = data

    
const onSubmit = async (data) => {
    

if(data.orderquantity < minimumOrder && data.orderquantity > availableQuantity){
    
    return toast(' quantity Must be bigger minimumorder and lower then available quantity')
     
    }else{

        const totalPrice = (data.orderquantity * price)
        const booking = {

            img :img ,
            user : user.displayName ,
           email : user.email ,
           address:data.address ,
           number : data.number ,
           quantity : data.orderquantity ,
           price: price ,
           totalPrice:totalPrice ,
           name : name 
       }
       const url = 'https://electronics-manufecture-website.onrender.com/myorders';
       
       fetch(url,{
           method:'POST',
           headers:{
              'content-type': 'application/json'
           },
           body: JSON.stringify(booking)
       })
       .then(res=>res.json())
       .then(resu=>{
        reset()
           toast('purchage confirm')
        })
         
    }
    
    

   
}


  return (
    <div className=' grid lg:grid-cols-2 md:grid-cols-2 gap-10 md:gap-5 justify-center mt-8 mb-5 sm:ms-2'>
       <div className="card mx-auto buy max-w-lg min-w-80  bg-base-100 shadow-2xl shadow-2yl ">
  <figure className="px-5 pt-10">
    <img src={img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Name: {name}</h2>
    <h2 className="card-title">Available Quantity: {availableQuantity}</h2>
    <h2 className="card-title">Minimum Order: {minimumOrder}</h2>
    <h2 className="card-title">Price: {price}</h2>
    <p>Description: {description}</p>
  </div>
  </div>

    <div className="card buy sm:ms-2 lg:w-[550px] md:w-[320px] sm:w-[310px] justify-center bg-base-100 shadow-2xl mx-auto">
        <div className="card-body lg:w-[540px] sm:w-[300px] items-center ">
            <h2 className="text-center text-2xl font-bold">Order Please</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="input input-bordered w-full max-w-xs" 
                        value={user?.displayName} readOnly
                    />
                    
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="input input-bordered w-full max-w-xs"
                        value={user?.email}
                        readOnly
                    />
                
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Address</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Your Address"
                        className="input input-bordered w-full max-w-xs"
                        {...register("address", {
                            required: {
                                value: true,
                                message: 'Address is Required'
                            }
                        })}
                    />
                    <label className="label">
                                {errors.address?.type === 'required' && <span className="label-text-alt text-red-500">{errors.address.message}</span>}
                            </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Number</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Your Phone Number"
                        className="input input-bordered w-full max-w-xs"
                        {...register("number", {
                            required: {
                                value: true,
                                message: 'Number is Required'
                            }
                        })}
                    />
                    <label className="label">
                                {errors.number?.type === 'required' && <span className="label-text-alt text-red-500">{errors.number.message}</span>}
                            </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Order Quantity</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Your Order Quantity"
                        className="input input-bordered w-full max-w-xs mb-2" defaultValue={minimumOrder}
                        {...register("orderquantity", {
                            required: {
                                value: true,
                                message: 'Order is Required'
                            },
                            max:{
                                value:`${data.availableQuantity}`,
                            message:'less then available quantity require'
                        },
                            min:{
                                value:`${data.minimumOrder}`,
                            message:'more then available quantity require'
                        }

                        })}
                    />
                    <label className="label">
                                {errors.orderquantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.orderquantity.message}</span>}
                                {errors.orderquantity?.type === 'max' && <span className="label-text-alt text-sm text-red-500">{errors.orderquantity.message}</span>}
                                {errors.orderquantity?.type === 'min' && <span className="label-text-alt text-sm text-red-500">{errors.orderquantity.message}</span>}
                  </label>
            
                </div>
                <input  className='btn w-full max-w-xs text-white' type="submit" value="Purchage" /> 
        
            </form>
        </div>
    </div>
</div >

  );
};

export default Purchage;