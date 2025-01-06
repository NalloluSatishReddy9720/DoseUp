import React from 'react'

function Caursolitem({image,title}) {
  return (
    <div className='flex flex-col justify-center items-center overflow-hidden'>
        <img className='h-[5rem] w-[5rem] lg:h-[13rem] lg:w-[13rem] rounded-full object-cover object-center overflow-hidden p-1' src={image} alt="" />
        <span className='py-5 font-semibold lg:text-xl text-gray-400'>{title}</span>
    </div>
  )
}

export default Caursolitem
