
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
  const { register,watch, formState: { errors }, handleSubmit } = useForm();
  const [user] =useAuthState(auth)
  const  [quantity,setQuantity] = useState(true)
  
  const {data,isLoading}=useQuery('tool',()=>
  fetch(`http://localhost:5000/tools/${id}` ).then(res => res.json())
  )

  if(isLoading){
      return <Loading></Loading>
    }
    
    const { availableQuantity,minimumOrder,price ,img,description,name} = data
    
    
const onSubmit = async (data) => {
    console.log(data.orderquantity,minimumOrder,availableQuantity);
   

if(data.orderquantity < minimumOrder && data.orderquantity > availableQuantity){
    
    return toast(' quantity Must be bigger minimumorder and lower then available quantity') 
    
    
    }else{

        const totalPrice = (quantity * price)
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
       const url = 'http://localhost:5000/myorders';
       
       fetch(url,{
           method:'POST',
           headers:{
              'content-type': 'application/json'
           },
           body: JSON.stringify(booking)
       })
       .then(res=>res.json())
       .then(resu=>console.log(resu))
         
    }
    
    
    
 
   
}


  return (
    <div className='w-full  grid lg:grid-cols-2   gap-10 justify-between mt-10'>
       <div class="card w-full  bg-base-100 shadow-2xl shadow-2yl ">
  <figure class="px-10 pt-10">
    <img src={img} alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">Name: {name}</h2>
    <h2 class="card-title">Available Quantity: {availableQuantity}</h2>
    <h2 class="card-title">Minimum Order: {minimumOrder}</h2>
    <h2 class="card-title">Price: {price}</h2>
    <p>Description: {description}</p>
  </div>
  </div>

    <div className="card w-96 justify-center bg-base-100 shadow-2xl mx-auto">
        <div className="card-body">
            <h2 className="text-center text-2xl font-bold">Order Please</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Img Url</span>
                    </label>
                    <input
                        type="text"
                        placeholder="image url"
                        className="input input-bordered w-full max-w-xs" 
                        value={img} readOnly
                    />
                    
                </div>
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
                        className="input input-bordered w-full max-w-xs mb-2"
                        {...register("orderquantity", {
                            required: {
                                value: true,
                                message: 'Order is Required'
                            }
                        })}
                    />
                    <label className="label">
                                {errors.orderquantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.orderquantity.message}</span>}
                            </label>
            
                </div>
                <input className='btn w-full max-w-xs text-white' type="submit" value="Purchage" /> 
                {/* {quantity ? <input   className='btn w-full max-w-xs text-white' type="submit" value="Purchage" />  :
                <input disabled  className='btn w-full max-w-xs text-white' type="submit" value="Purchage2" />} */}
            </form>
        </div>
    </div>
</div >

  );
};

export default Purchage;