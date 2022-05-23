import { useQuery } from "react-query";
import Loading from '../Shared/Loading'

const UseHooks = () => {

  const {data ,isLoading,refetch} = useQuery( ['tools'],() =>
    fetch('http://localhost:5000/tools').then(res => res.json())
  )
  if(isLoading){
    return <Loading></Loading>
  }
 
  return {data};
};

export default UseHooks;