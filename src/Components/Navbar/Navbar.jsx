import React from 'react'
import './Navbar.css'
import { IoSearch } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";
import { FaShoppingCart } from "react-icons/fa";
import { Badge } from '@mui/material';



function Navbar() {
  return (
    <>
    <section className=''>
    <div className='px-5  py-[.8rem] bg-gray-700 lg:px-20 lg:py-2 flex  justify-between h-16 w-full border-b-2 border-gray-600 text-white'>
     
     <div className='lg:mr-10 cursor-pointer flex items-center space-x-4'>
         <li className='logo font-semibold text-grey-300 text-2xl'>DoseUp</li>
     </div>
     
     <div className="search_bar   items-center w-full p-1 ">
           
           <span className='search_icon'> <IoSearch  className='text-[25px] bg-white text-gray-700   p-1' /></span>
            <input type="text" className="search_input" placeholder="Search for products,brands and more"/>
            
      </div>
       
      
     
     <div className='flex items-center space-x-2 lg:space-x-2 justify-evenly'>
   
         
         <div  className=' px-2'>
         <a
                   href=""
                   className="text-white  rounded-full p-1"
                 ><Badge   color='primary' badgeContent={3}>
                   < FaShoppingCart  className='text-[40px]'/>
                   </Badge>
                 </a>
         </div>
         <div  className=' px-2'>
         <a
                   href=""
                   className="text-white  rounded-full p-1"
                 >
                   <RxAvatar   className='text-[40px]   rounded-full' />
                 </a>
         </div>
         
         
     </div>
 </div>
 </section>

    </>
  )
}

export default Navbar
