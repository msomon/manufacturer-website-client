import React from 'react';

const Review = ({reviewa}) => {
  // const {email,review,comment}= reviewa ;
  // console.log(reviewa);
  return (  
<div class="card w-full  bg-base-100 shadow-xl ">
  <div class="card-body items-center text-center">
    <h2 class="card-title">Email: {reviewa?.email}</h2>
    <h2 class="card-title">Rating : 5/{reviewa?.review}</h2>
    <p>Comment: {reviewa?.comment}</p>

  </div>
</div>
  );
};

export default Review;