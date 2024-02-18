import React from 'react';
import { Carousel } from 'react-bootstrap';
import UseHooks from '../../Hooks/UseHooks';
import Tool from './Tool'
import img1 from '../../images/carosel1.webp'
import img2 from '../../images/carosel4.webp'
import img3 from '../../images/carosel3.webp'
import UpcomingProducts from './UpcomingProducts';
import Contact from './Contact';
import About from './About';
// import TopCustomer from './TopCustomer';

const Home = () => {
  const {tools} =UseHooks()

  return (
<div className='sm:mb-3'>
 <div className='carosel sm:mx-0 sm:ms-1 mt-3 sm:p-1 sm:mb-2 mb-10 '>
<Carousel className='max-w-7xl min-w-80 sm:h-[220px] md:h-[300px] lg:h-[450px] rounded-2xl mx-auto '>
  <Carousel.Item>
    <img
      className="w-full sm:h-[220px] md:h-[300px] lg:h-[450px] rounded-2xl"
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
      className=" w-full sm:h-[220px] md:h-[300px] lg:h-[450px] rounded-2xl"
      src={img2}
      alt="Second slide"
    />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className=" w-full sm:h-[220px] md:h-[300px] lg:h-[450px] rounded-2xl"
      src={img3}
      alt="Third slide"
    />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

</div>

<div className='sm:mx-3'>

 <About></About>

  </div>


<div className='lg:mt-10  sm:mt-0'>
  <h3 className='text-center text-green-700 text-4xl font-bold mb-3 mt-0 '>Our Products </h3>
</div>

   <div className=' grid  md:grid-cols-2 lg:grid-cols-3 sm:gap-2 lg:gap-8 justify-center items-center lg:mx-[200px] lg:my-16  sm:my-5 sm:mx-3'>

  
      {
        tools?.map(tool=><Tool key={tool._id} tool={tool}></Tool>)
      }
  </div> 
  

 <div className='sm:mx-3'>
   <UpcomingProducts></UpcomingProducts>
 </div>
 <div className='bg-base-300 grid justify-items-center w-full '>
  <Contact></Contact>
 </div>
 </div>

  );
};

export default Home;