import React from 'react'

function ServiceBox({image , title ,info}) {
  return (
    <div className='w-[45%] h-[600px] border-2  my-5  rounded-3xl  bg-white max-md:w-full'>
        <img src={image} alt="service" className=' rounded-t-xl' />
        
        <h2 className='text-[20px] font-bold text-center mt-5 text-submainBlue'>{title}</h2>
        <p className='px-3 text-backgroundtext '>{info}</p>
        <div className='flex justify-center mt-auto'>
        <button className='text-[16px] rounded-lg font-bold px-[25px] py-[8px] serviceBtn max-md:my-[20px]'>Get Quote</button>
        </div>
      
    </div>
  )
}

export default ServiceBox