import React from "react";


const Contact = () => {
  return (
    <div className='max-w-lg min-w-80 py-10 mb-10'>
      <div className=' text-center pb-10'>
        <p className='text-3xl font-bold '>
         Please Contact 
        </p>
      </div>
      <div className='grid grid-cols-1 justify-items-center gap-4'>
        <input
          type='text'
          placeholder='Email Address'
          className='input lg:w-[700px] md:w-[600px] sm:w-[300px] '
        />
        <input
          type='text'
          placeholder='Subject'
          className='input lg:w-[700px] md:w-[600px] sm:w-[300px] '
        />
        <textarea
          className='textarea lg:w-[700px] md:w-[600px] sm:w-[300px] '
          placeholder='Your message'
          rows={6}
        ></textarea>
        <button className="btn btn-primary">Submit</button>
      </div>
    </div>
  );
};

export default Contact;