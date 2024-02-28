import { Rating } from 'primereact/rating';
import React from 'react';


const Review = ({review}) => {
  // console.log(reviewa);
  
  return (  
<div className="card max-w-lg min-w-80 bg-base-100 shadow-xl ">
  <div className="card-body items-center text-center">
    <h2 className="card-title">Email: {review?.email}</h2>
    <h2 className="card-title">Rating:
    <Rating readOnly className='text-yellow-600 gap-2' value={review.review} cancel={false}   />
  
    
    
    </h2>
    <p>Comment: {review?.comment}</p>
  </div>
</div>
  );
};

export default Review;