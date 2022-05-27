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
    fetch(`http://localhost:5000/user/myprofile/${users?.email}`, {
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
    <div className='h-full w-3/4 mx-auto  gap-10 justify-between mt-8 mb-5'>
      
    <div class="card w-full  bg-base-100 shadow-2xl shadow-2yl "><h3 className='text-center mt-3 text-3xl text-green-500 '>🌹 My Profile 🌹</h3>
<div class="card-body items-center text-center">
<h2 class="card-title">Name:{profiles.user}</h2>
 <h2 class="card-title">Email: {profiles.email}</h2> 
 <h2 class="card-title">Address: {profiles.address}</h2>
 <h2 class="card-title">Number: {profiles.number}</h2>
 <h2 class="card-title">Education: {profiles.education}</h2>
 <button className='btn btn-primary'><Link to='/updatemyprofile'>Update Your Profile</Link></button>
</div>

</div>
</div >

  );
};

export default MyProfile;