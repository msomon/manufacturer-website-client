import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading'


const MyProfile = () => {
  const [users] = useAuthState(auth)
  const [profiles,setProfiles] = useState([]);
  const [loading,setLoading] = useState(false);
  
  useEffect( ()=>{
    // setLoading(true)
    fetch(`https://sleepy-brook-79910.herokuapp.com/user/myprofile/${users.email}`, {
      method: 'GET',
      headers: {
          'authorization': `Bearer ${localStorage.getItem('accessToken')}`
      }
  })
    .then(res =>res.json())
    .then(data=>{
      setLoading(false)
      setProfiles(data)
    })
  },[profiles]);

  if(loading){
    return <Loading> </Loading>
  }
     

// console.log(users);

  return (
    <div className='h-100 w-80 sm:mx-4  lg:w-3/4 justify-between mt-8 mb-3'>
      
    <div className="card w-full  bg-base-100 shadow-2xl shadow-2yl "><h3 className='text-center mt-3 text-3xl text-green-500 '>🌹 My Profile 🌹</h3>
<div className="card-body items-center text-center">
<h2 className="card-title">Name:{profiles?.user}</h2>
 <h2 className="card-title">Email: {profiles?.email}</h2> 
 <h2 className="card-title">Address: {profiles?.address}</h2>
 <h2 className="card-title">Number: {profiles?.number}</h2>
 <h2 className="card-title">Education: {profiles?.education}</h2>
 <button className='btn btn-primary'><Link to='/updatemyprofile'>ADD OR Update Your Profile</Link></button>
</div>

</div>
</div >

  );
};

export default MyProfile;