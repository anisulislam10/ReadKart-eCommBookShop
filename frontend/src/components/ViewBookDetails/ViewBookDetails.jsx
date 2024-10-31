import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { LuLanguages } from "react-icons/lu";
import { MdDelete, MdFavoriteBorder } from "react-icons/md";
import { FaCartPlus, FaEdit } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { authAction } from '../../Store/auth.js';





function ViewBookDetails() {
  const navigate=useNavigate();
  const { id } = useParams()
  console.log(id);
  const [booksById, setBookById] = useState(null) // Initialize with null to indicate 'no data'
  const isLoggedin=useSelector((state)=>state.auth.isLoggedin);
  const role=useSelector((state)=>state.auth.role);
  console.log(isLoggedin);
  console.log(role);
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
  const headers={
    id: localStorage.getItem("id"),
    authorization:`Bearer ${localStorage.getItem("token")}`,  
    bookid:id
  }
const handleFavourite= async()=>{
  try {
    const response= await axios.put("http://localhost:3000/api/v1/favourite/addtofavourite", {},{headers});
    alert(response.data.message);
    
  } catch (error) {
    console.log(error);
    
  }
}
const handleDeleteBook= async()=>{
  try {
    const response= await axios.delete("http://localhost:3000/api/v1/book/deletebook/",{headers});
    alert(response.data.message);
    navigate("/all-books")
    
  } catch (error) {
    alert(error.response.data.message);
    
    
  }
}
const handleCart = async()=>{
  try {
    const response= await axios.put("http://localhost:3000/api/v1/cart/addtocart", {},{headers});
    alert(response.data.message);
    
  } catch (error) {
    console.log(error);
    
  }
}
  // Render the component once the data is available
  return (
<div className='px-12 py-8 bg-purple-800 flex gap-8'>
  <div className='bg-purple-900 rounded p-4 h-[88vh] w-3/6 flex items-center justify-center'>
    <img src={booksById.url} alt={booksById.title} className='h-[70vh] pl-[100px]' />

{/* when --User logged-in show this */}
{
  isLoggedin===true && role==="user" &&(
    <div  className=' text-center flex items-center flex-col ml-40 gap-2' > 
      <button className=' shadow-2xl bg-purple-950  rounded-full text-white'><MdFavoriteBorder onClick={handleFavourite} className='h-[30px] w-[30px] px-1 py-1'/></button>
      <button className='shadow-2xl bg-purple-950 rounded-full text-white'><FaCartPlus onClick={handleCart} className='h-[30px] w-[30px] px-1 py-1'/></button>


    </div>
  )
}

{/* when --Admin logged-in show this */}


{
  isLoggedin===true && role==="admin" && (
    <div className=' text-center flex items-center flex-col ml-40 gap-2' > 
      <Link to={`/update-Book-admin/${id}`} className=' shadow-2xl bg-purple-950  rounded-full text-white'><FaEdit className='h-[30px] w-[30px] px-1 py-1'/></Link>

      <button onClick={handleDeleteBook} className='shadow-2xl bg-purple-950 rounded-full text-white'><MdDelete className='h-[30px] w-[30px] px-1 py-1'/></button>


    </div>
  )
}


    
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
