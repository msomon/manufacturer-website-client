
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import Review from './Review';

const Reviews = () => {

  const {data : reviews,isLoading} = useQuery('',()=>fetch('http://localhost:5000/reviews', {
    method: 'GET',
    headers: {
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    }
})
  .then(res =>res.json())
    
  )

  if(isLoading){
    return <Loading></Loading>
  }

// console.log(reviews);
  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 ml-5 mt-7 gap-4 mb-5'>
      {
        reviews?.slice(-reviews.length).reverse().map(review=><Review key={review._id} reviewa={review}></Review>)
      }
    </div>
  );
};

export default Reviews;