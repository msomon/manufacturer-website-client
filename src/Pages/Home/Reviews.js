
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import Review from './Review';

const Reviews = () => {

  const {data : reviews,isLoading} = useQuery('',()=>fetch('https://sleepy-brook-79910.herokuapp.com/reviews', {
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
   <div>
      <h1 className='text-center text-3xl text-primary mt-3 mb-3'>OUR CUSTOMER REVIEWS </h1>
      <div className='grid lg:grid-cols-3 md:grid-cols-2  mt-7 gap-4 mb-5'>
      {
        reviews?.slice(-reviews.length).reverse().map(review=><Review key={review._id} reviewa={review}></Review>)
      }
    </div>
   </div>
  );
};

export default Reviews;