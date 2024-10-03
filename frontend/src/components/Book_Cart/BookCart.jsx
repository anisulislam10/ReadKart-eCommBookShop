import React from 'react'
import {Link} from 'react-router-dom'

function BookCart({data}) {
  console.log(data);
  
  return (
  <>
  <Link>
  
  <div className='bg-purple-800 rounded p-4 flex flex-col   '>
<div className='bg-purple-900 flex items-center justify-center hover:bg-purple-700 hover:transition duration-1000 '> 
  <img src={data.url} alt={data.title} className='w-[150px] rounded shadow-lg border-2 border-black'/>
  </div>
<h2 className='text-xl text-yellow-100 font-semibold text-left'>{data.title}</h2>
<p className='  text-purple-400 font-semibold text-left underline'>By:{data.author} </p>
<p className=' text-purple-400 font-semibold text-left'>PKR:{data.price} /-</p>




  </div>
  </Link>
  </>
  )
}

export default BookCart