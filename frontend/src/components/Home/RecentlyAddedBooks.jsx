import React, { useEffect, useState } from 'react'
import BookCart from './../Book_Cart/BookCart.jsx'
import axios from 'axios'
import Loader from '../Loader/Loader.jsx'

function RecentlyAddedBooks() {
    const [Books, setBooks] = useState()
    useEffect(() => {
        const fetch = async()=>{
          const response =  await axios.get("http://localhost:3000/api/v1/book/getrecentbook");
         setBooks(response.data.data);
          
        };
        fetch();
    }, [])
    
  return (
    <div className='mt-5 mx-4 '>
    <h4 className='text-3xl text-yellow-100'>Recently Added Books</h4>
    {!Books && (<div className='flex items-center justify-center my-4'>
      <Loader/>
    </div>
)}
    <div className='my-8 grid grid-cols-4 gap-4'>
    {
      Books &&
      Books.map((item,i)=>(
      <div key={i}>
         <BookCart data = {item}/> {" "}
          </div>
          ))}
    </div>
    </div>
  )
}

export default RecentlyAddedBooks