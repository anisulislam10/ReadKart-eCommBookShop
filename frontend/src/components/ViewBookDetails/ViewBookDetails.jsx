import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { LuLanguages } from "react-icons/lu";
import { MdFavoriteBorder } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa";





function ViewBookDetails() {
  const { id } = useParams()
  console.log(id);
  const [booksById, setBookById] = useState(null) // Initialize with null to indicate 'no data'
  
  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/v1/book/getbookbyid/${id}`
        );
        setBookById(response.data.data); // Set data once it's fetched
      } catch (error) {
        console.error("Error fetching the book details:", error);
      }
    };
    fetch();
  }, [id]); // Add `id` as a dependency

  // Conditional rendering to avoid accessing properties of null
  if (!booksById) {
    return <p>Loading...</p>; // Render a loading state while data is being fetched
  }

  // Render the component once the data is available
  return (
<div className='px-12 py-8 bg-purple-800 flex gap-8'>
  <div className='bg-purple-900 rounded p-4 h-[88vh] w-3/6 flex items-center justify-center'>
    <img src={booksById.url} alt={booksById.title} className='h-[70vh] pl-[100px]' />
    <div className=' text-center flex items-center flex-col ml-40 gap-2' > 
      <button className=' shadow-2xl bg-purple-950  rounded-full text-white'><MdFavoriteBorder className='h-[30px] w-[30px] px-1 py-1'/></button>
      <button className='shadow-2xl bg-purple-950 rounded-full text-white'><FaCartPlus className='h-[30px] w-[30px] px-1 py-1'/></button>


    </div>
  </div>
  <div className='p-4 w-3/6 text-white'>
    <h1 className='text-2xl'>{booksById.title}</h1>
    <p>By: {booksById.author}</p>
    <p>{booksById.desc}</p>
    
    {/* Wrapping the icon and text in a flex container */}
    <p className='flex items-center'>
      <LuLanguages className='mr-2' /> {/* Add margin to create space between icon and text */}
      {booksById.language}
    </p>
    
    <p>PKR: {booksById.price} /-</p>
  </div>
</div>

  );
}

export default ViewBookDetails
