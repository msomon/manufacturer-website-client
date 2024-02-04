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
 <div className='carosel lg:w-[1500px] sm:w-[400px] lg:h-[450px]  sm:h-[200px] mx-auto '>
<Carousel>
  <Carousel.Item>
    <img
      className="d-block lg:w-[1500px] sm:w-[400px] lg:h-[450px]  sm:h-[200px]"
      src={img1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 className='text-orange-500 text-bold lg:text-4xl'> Welcome My Website </h3>
      <p className='text-primary lg:text-2xl'>Good Quality Product</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block lg:w-[1500px] sm:w-[400px] lg:h-[450px]  sm:h-[200px]"
      src={img2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3 className='text-yellow-500 lg:text-4xl'>New Product Collection </h3>
      <p className='text-orange-600 lg:text-2xl'>Quality full Products</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="lg:w-[1500px] sm:w-[400px] lg:h-[450px]  sm:h-[200px]"
      src={img3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3 className='text-fuchsia-600 lg:text-4xl'>Your Opinion My Commitment</h3>
      <p className='text-red-400 lg:text-2xl'>Highly Good Maintainense </p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

</div>
<div>

  <h3 className='text-center text-green-700 text-4xl font-bold mt-5'>Our Products </h3>
</div>

   <div className=' grid  md:grid-cols-2 lg:grid-cols-3 gap-5 lg:my-16 sm:my-10 sm:mx-3'>
  
      {
        tools?.reverse().map(tool=><Tool key={tool._id} tool={tool}></Tool>)
      }
  </div> 
  <div className='sm:mx-3'>

 <Reviews></Reviews>

  </div>


 <div className='sm:mx-3'>
   <UpcomingProducts></UpcomingProducts>
 </div>
 <div className='bg-base-300 lg:w-full grid justify-items-center sm:w-[400px]'>
  <Contact></Contact>
 </div>
 </div>

  );
};

export default Home;