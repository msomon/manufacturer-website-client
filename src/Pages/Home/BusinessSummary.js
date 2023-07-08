import React from 'react';

const BusinessSummary = () => {
  return (
    <div className='card lg:w-full sm:w-[70vh] bg-base-100 shadow-xl h-80vh  mt-20 mb-5'>
      <h1 className='text-center text-4xl mt-8 text-green-400'>YOUR TRUSTED SERVICE PROVIDER</h1>
      <h1 className='text-center text-primary text-xl mt-8 mb-4'>USERS COMMITMENT OUR INSPIRATION</h1>
      <div className="stats shadow ">
  <div className="stat  ">
    <div className="stat-figure text-primary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" sstrokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
    </div>
    <div className="stat-title mb-2 text-xl text-orange-400">200 ++</div>
    <div className="stat-value text-primary">Countries </div>
    <div className="stat-desc mt-2 text-xl text-green-400">Bussiness With Us </div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    </div>
    <div className="stat-title text-orange-400">TOTAL </div>
    <div className="stat-value text-secondary">20.6M US DOLLER</div>
    <div className="stat-desc text-green-400"> TRANSACTION WITH CUSTOMER</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <div className="avatar online">
        <div className="w-16 rounded-full">
          <img src="https://api.lorem.space/image/face?w=128&h=128" />
        </div>
      </div>
    </div>
    <div className="stat-value text-orange-400">20M</div>
    <div className="stat-title">CLINT</div>
    <div className="stat-desc text-green-400">CONNECT US</div>
  </div>
  
</div>
    </div>
  );
};

export default BusinessSummary;