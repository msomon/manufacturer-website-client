import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from '../Shared/Loading'

const UseHooks = () => {
  const [tools,setTools] = useState([]);


useEffect( ()=>{
  fetch('http://localhost:5000/tools')
  .then(res => res.json())
  .then(data=>setTools(data))


},[tools])

 
  return {tools,setTools};
};

export default UseHooks;