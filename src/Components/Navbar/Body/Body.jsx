import React from "react";
import {Routes,Route,Link}from "react-router-dom"

import { RiHome3Line } from "react-icons/ri";
import { FaUserDoctor } from "react-icons/fa6";
import { GiMedicines } from "react-icons/gi";
import { MdLiveHelp } from "react-icons/md";
import Home from "./Home";
import DoctorConsulation from "./DoctorConsulation";
import Medicines from "./Medicines";
import FactoryDirect from "./FactoryDirect";
import Help from "./Help";

const Body = () => {
  return (<>
    <div className='px-5 py-[.8rem] bg-gray-700 lg:px-20 lg:py-2  h-16 w-full  text-white hidden sm:block '>
      
    <div className="flex justify-evenly  items-center w-full pt-3">
        <div>
        <span>
            <Link to="/">Home</Link>
        </span>
        </div>
        <div>
        <span>
            <Link to="/DoctorConsulation">DoctorConsulation</Link>
        </span> 
        </div>
        <div>
        <span>
            <Link to="/Medicines">Medicines</Link>
        </span> 
        </div>
        <div>
        <span>
            <Link to="/FactoryDirect">FactoryDirect</Link>
        </span>
        </div>
        <div>
        <span>
            <Link to="/Help">Help</Link>
        </span>
        </div>
    </div>
    </div>
    <div  className='px-5 py-[.5rem] bg-gray-700   h-16 w-full  text-white sm:hidden bottom-0 fixed '>
   
          
            <div className='flex justify-between  items-center w-full '>
            
              <div  className='text-white rounded-full ' >
                
                <span className="text-[10px] text-wrap">
                < RiHome3Line  className="text-[20px]"/>
                     <Link to="/">Home</Link>
                 </span>
              </div>
            
            
              <div  className='text-white rounded-full ' >
               
                <span className="text-[10px] text-wrap">
                <FaUserDoctor  className="text-[20px]"/>
                    <Link to="/DoctorConsulation">Doctors</Link>
                </span>
              </div>
            
            
              <div  className='text-white rounded-full ' >
               
                <span className="text-[10px] text-wrap">
                <GiMedicines className="text-[20px]"/>
                    <Link to="/Medicines">Medicines</Link>
                 </span> 
              </div>
            
           
              <div  className='text-white rounded-full ' >
                
                <span className="text-[10px] text-wrap">
                <GiMedicines className="text-[20px]"/>
                  <Link to="/FactoryDirect">Factory</Link>
                 </span>
              </div>
            
            
              <div className='text-white rounded-full ' >
                
                <span className="text-[10px] text-wrap">
                <MdLiveHelp className="text-[20px]"/>
                    <Link to="/Help">Help</Link>
                 </span>
              </div>
           
            </div>
          
        
    </div>


   <Routes>
   <Route path="/" element={<Home/>} ></Route>
   <Route path="/DoctorConsulation" element={<DoctorConsulation/>} ></Route>
   <Route path="/Medicines" element={<Medicines/>} ></Route>
   <Route path="/FactoryDirect" element={<FactoryDirect/>}  ></Route>
   <Route path="/Help" element={<Help/>} ></Route>


    
   </Routes>
   </>);
}
export default Body;