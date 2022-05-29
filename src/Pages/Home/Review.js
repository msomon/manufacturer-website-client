import React from 'react';

const Review = ({reviewa}) => {
  // const {email,review,comment}= reviewa ;
  // console.log(reviewa);
  return (  
<div className="card w-full  bg-base-100 shadow-xl ">
  <div className="card-body items-center text-center">
    <h2 className="card-title">Email: {reviewa?.email}</h2>
    <h2 className="card-title">Rating : 5/{reviewa?.review}</h2>
    <p>Comment: {reviewa?.comment}</p>
  </div>
</div>
  );
};

export default Review;