import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function Signupinputs() {

  const[showPassword,setPassword]=useState([])

   function handleShowPassword(){
    setPassword((prev) =>!prev)

  }
  return (
    <div className="flex justify-between">
      <div>
        <h1>Create An Account</h1>
        
        <div className="flex">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        
        <div className="flex flex-col">
          <input 
            type="email" 
            placeholder="Email Address" 
            className="rounded-full py-2 px-8 border-solid border-2 border-[#928E8E] mt-4"
          />
          <input 
            type="tel" 
            placeholder="Phone Number" 
            className="rounded-full py-2 px-8 border-solid border-2 border-[#928E8E] mt-4"
          />
          
          <div className="relative flex items-center">
            <input 
              type={showPassword? "password":"text"}
              placeholder="Password" 
              className="rounded-full py-2 px-8 border-solid border-2 border-[#928E8E] mt-4 w-full"
            />
            <div 
            onClick={handleShowPassword}
            className="absolute right-3 top-1/2 transform -translate-y-1/2">
              {/* <FaEye className="text-gray-500 mb-1" />
              <FaEyeSlash className="text-gray-500" /> */}
              {showPassword? <FaEye/>:<FaEyeSlash/>}
            </div>
          </div>
          
          <div className="relative flex items-center">
            <input 
              type= {showPassword? "password" : "text"}
              placeholder="Confirm Password" 
              className="rounded-full py-2 px-8 border-solid border-2 border-[#928E8E] mt-4 w-full"
            />
            <div onClick={handleShowPassword}
            className="absolute right-3 top-1/2 transform -translate-y-1/2">
              {/* <FaEye className="text-gray-500 mb-1" />
              <FaEyeSlash className="text-gray-500" /> */}
              {showPassword? <FaEye/>:<FaEyeSlash/>}
            </div>
          </div>
          
          <button>Create Account</button>
          <p>OR</p>
          <button>Sign Up With Google</button>
          <p>Already Have An Account</p>
        </div>
      </div>
      
      <div>
        <img src="src/assets/signup.png" alt="Shop" />
      </div>
    </div>
  );
}