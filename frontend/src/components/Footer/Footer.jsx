import React from 'react'
import { CiFacebook, CiTwitter, CiLinkedin, CiInstagram } from "react-icons/ci";

function Footer() {
  return (
    <div className='bg-purple-600'>
      <div className='grid grid-cols-4 items-center text-center'>
        <div>
          <h1 className='text-lg text-white font-bold'>Company</h1>
          <p className='text-left pl-11 text-white'>ReadKart is fist online book store in chitral. you can buy books online with us</p>
        </div>

        <div>
          <h1 className='text-lg text-white font-bold'>Quick Links</h1>
          <ul className='text-left ml-[120px] text-white  '>
            <li className='hover:text-blue-500 transition-all duration-300'>Home</li>
            <li className='hover:text-blue-500 transition-all duration-300'>About us</li>
            <li className='hover:text-blue-500 transition-all duration-300'>All Books</li>
            <li className='hover:text-blue-500 transition-all duration-300'>About Founder</li>
            
          </ul>
        </div>

        <div>
          <h1 className='text-lg text-white font-bold'>Legal</h1>
          <ul className='text-left ml-[140px] text-white'>
            <li className='hover:text-blue-500 transition-all duration-300'>Return Policy</li>
            <li className='hover:text-blue-500 transition-all duration-300'>Work with Us</li>
            <li className='hover:text-blue-500 transition-all duration-300'>Sell Your Books</li>
            <li className='hover:text-blue-500 transition-all duration-300'>Privacy</li>
          </ul>
        </div>
        
        <div>
          <h1 className='text-lg text-white font-bold mb-16'>Follow US</h1>
          <ul className='text-left ml-[130px] text-white flex'>
            <li  className='w-5'> <CiLinkedin className='  hover:bg-blue-600 rounded-full' /></li>
            <li className='w-5'> <CiTwitter className=' hover:bg-sky-700 rounded-full'/></li>
            <li className='w-5'><CiFacebook className=' hover:bg-blue-600 rounded-full'/></li>
            <li className='w-5'><CiInstagram className=' hover:bg-red-600 rounded-full'/></li>
          </ul>

        </div>
      </div>
      <div className='bg-purple-700 text-center items-center text-white text[20px] mt-2 flex justify-around px-5'>
      <p>ReadKart © 2024 | Developed with ❤ by anisul </p>
      <p>V1.0 | <span className='text-whtie hover:text-blue-300'><a href="https://anis-ul-islam.vercel.app" target="_blank"  rel="noopener noreferrer">Developer</a> </span></p>
      </div>
    </div>
  )
}

export default Footer