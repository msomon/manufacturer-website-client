import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const MyProfile = () => {
  const [users] = useAuthState(auth)
  const [profiles,setProfiles] = useState([]);
  const {user,email,address,number,education}= profiles

  useEffect( ()=>{
    fetch(`http://localhost:5000/user/myprofile/${users?.email}`)
    .then(res =>res.json())
    .then(data=>setProfiles(data))
  },[]);
     

// console.log(users);

  return (
    <div className='w-3/4 mx-auto  gap-10 justify-between mt-8'>
      
    <div class="card w-full  bg-base-100 shadow-2xl shadow-2yl "><h3 className='text-center mt-3 text-3xl text-green-500 '>🌹 My Profile 🌹</h3>
<div class="card-body items-center text-center">
 <h2 class="card-title">Name:{user}</h2>
 <h2 class="card-title">Email: {email}</h2> 
 <h2 class="card-title">Address: {address}</h2>
 <h2 class="card-title">Number: {number}</h2>
 <p>Education: {education}</p>
 <button className='btn btn-primary'><Link to='/updatemyprofile'>Update Your Profile</Link></button>
</div>
</div>
</div >

  );
};

export default MyProfile;