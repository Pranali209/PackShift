import React from 'react'

function WhyUsCard({img , title}) {
  return (
    <div className=' w-64 h-[8rem] m-1 my-3 max-md:w-52 
    rounded-2xl bg-backgroundGrey flex flex-col justify-center align-middle p-3'>
        <img src={img} alt={title} className='w-20 h-24 m-auto'/>
        <h2 className='text-sm text-center text-black font-medium'>{title}</h2>

    </div>
  )
}

export default WhyUsCard