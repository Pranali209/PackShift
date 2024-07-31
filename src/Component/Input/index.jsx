import React from 'react'

function Input({ type, placeholder , className = 'w-full p-2 border border-gray-300 rounded'}) {
    return (
      <div className='mb-4'>
        <input 
          type={type}  
          className= {className}
          placeholder={placeholder} 
        />
      </div>
    );
  }

export default Input