import React from 'react';
import { Carousel } from 'react-bootstrap';
import UseHooks from '../../Hooks/UseHooks';
import Tool from './Tool'
import img1 from '../../images/carosel1.webp'
import img2 from '../../images/carosel4.webp'
import img3 from '../../images/carosel3.webp'
import './Home.css'
import Reviews from './Reviews'
import UpcomingProducts from './UpcomingProducts';
import Contact from './Contact';
// import TopCustomer from './TopCustomer';

const Home = () => {
  const {tools,setTools} =UseHooks()
 

  // console.log(data);
  return (
<div className='sm:mb-3'>
 <div className='carosel sm:mx-0 '>
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-full"
      src={img1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 className='text-red-700 text-2xl'> Welcome My Website </h3>
      <p className='text-neutral-900'>Good Quality Producta</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3 className='text-red-400 text-2xl'>Welcome Newproduct World</h3>
      <p>Quality full Products</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3 className='text-red-400 text-2xl'>Your Opinion My Commitment</h3>
      <p>Highly Good Maintainense </p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

</div>

   <div className=' grid  md:grid-cols-2 lg:grid-cols-3 gap-7 my-16 sm:mx-3'>
  
      {
        tools?.slice(-6).reverse().map(tool=><Tool key={tool._id} tool={tool}></Tool>)
      }
  </div> 
  <div className='sm:mx-3'>

 <Reviews></Reviews>

  </div>


 <div className='sm:mx-3'>
   <UpcomingProducts></UpcomingProducts>
 </div>
 <div className='bg-base-200 '>
  <Contact></Contact>
 </div>
 </div>

  );
};

export default Home;