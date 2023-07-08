import { useEffect, useState } from "react";

const UseHooks = () => {
  const [tools,setTools] = useState([]);


useEffect( ()=>{
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

//  console.log(tools);
  return {tools,setTools};
};

export default UseHooks;