import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyPortfolio = () => { 
  const [users] = useAuthState(auth)
  const [portfolio,setPortfolio] = useState([]);

  useEffect( ()=>{
    fetch(`http://localhost:5000/user/myprofile/${users?.email}`,
    {
      method: 'GET',
      headers: {
          'authorization': `Bearer ${localStorage.getItem('accessToken')}`
      }
  })
    .then(res =>res.json())
    .then(data=>setPortfolio(data))
  },[portfolio]);
     
// console.log(users);

  return (
    <div className='h-full w-3/4 mx-auto  gap-10 justify-between mt-8 mb-3'>
      
    <div class="card w-full  bg-base-100 shadow-2xl shadow-2yl "><h3 className='text-center mt-3 text-3xl text-green-500 '>❤ My Portfolio  ❤ </h3>
<div class="card-body items-center text-center">
 <h2 class="card-title">Name:{portfolio.user}</h2>
 <h2 class="card-title">Email: {portfolio.email}</h2> 
 <h2 class="card-title">Address: {portfolio.address}</h2>
 <h2 class="card-title">Number: {portfolio.number}</h2>
 <h2 class="card-title">Education: {portfolio.education}</h2>
<h2 class="card-title">live website projects links</h2>
<h1>https://electronics-manufacturer.web.app/</h1>
<h1>https://electronics-warehouse-59bbd.web.app/</h1>
<h1>https://photographer-somon.web.app/</h1>

  <h2 class="card-title">List Of Technology Uses :</h2>
<ul>
  <li>1. bootstrap</li>
  <li>2. daisyui</li>
  <li>3. firebase</li>
  <li>4. jsonwebtoken</li>
  <li>5. react-firebase-hooks</li>
  <li>6. react-hook-form</li>
  <li>7. react-query</li>
  <li>8. react-toastify</li>
  
</ul>
</div>
</div>
</div >

  );
  
};


export default MyPortfolio;