import React from 'react'
import img from './../../assets/heroimg.png'
import { Link } from 'react-router-dom'
function Hero() {
  return (
    <div className='h-[75vh] flex'>
        <div className='w-full lg:w-3/6 flex-col items-center lg:items-start justify-center'>
        <h1 className='text-4xl lg:text-6xl font-semibold text-yellow-100 text-center lg:text-left'>Dicsover Your Next Greate Read</h1>
        <p className='mt-4 text-xl text-white'> Uncover captivating stories, enriching knowledge, and endless inspiration in our curated collection of books</p>
        <div className='mt-8'> <Link to="/all-books" className='text-yellow-100 text-2xl font-semibold rounded-full border
         border-yellow-100 px-10 py-3 hover:bg-purple-800'>Discover Books</Link></div>
        
        </div>
        <div className='w-full lg:w-3/6 h-auto lg:h-[100%] flex items-center justify-center'>
        <img src={img} alt="hero" width="100%" className="" />
        </div>
    </div>
  )
}

export default Hero