import { useEffect, useState } from "react";
import Loading from "../Shared/Loading";

const UseHooks = () => {
  const [tools,setTools] = useState([]);


useEffect( ()=>{
  if(!tools){
    <Loading></Loading>
  }

  fetch('https://electronics-manufecture-website.onrender.com/tools',
  {
    method: 'GET',
    headers: {
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    }
})
  .then(res => res.json())
  .then(data=>setTools(data))


},[tools])

  return {tools,setTools};
};

export default UseHooks;