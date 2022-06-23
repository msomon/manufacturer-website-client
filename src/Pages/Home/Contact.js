import React from "react";


const Contact = () => {
  return (
    <div className=' px-10 py-10 mb-10'>
      <div className=' text-center pb-10'>
        <p className='text-3xl font-bold '>
         Please Contact 
        </p>
      </div>
      <div className='grid grid-cols-1 justify-items-center gap-4'>
        <input
          type='text'
          placeholder='Email Address'
          className='input w-full max-w-md'
        />
        <input
          type='text'
          placeholder='Subject'
          className='input w-full max-w-md'
        />
        <textarea
          className='textarea w-full max-w-md'
          placeholder='Your message'
          rows={6}
        ></textarea>
        <button className="btn btn-primary">Submit</button>
      </div>
    </div>
  );
};

export default Contact;