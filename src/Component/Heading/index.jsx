import React from 'react'

function Heading({ text1 , text2}) {
  return (
    <div className='m-auto w-fit flex items-center justify-center'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
        className="w-[1.2rem] h-[2rem] -mt-3 fill-submainBlue mr-2">
        <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
    </svg>
    <h1 className="text-2xl mb-4 font-semibold text-submain text-[26px]">
        <b className='text-submainBlue font-medium'>{text1}</b> {text2}
    </h1>
</div>
  )
}

export default Heading