import React, { useEffect, useState } from 'react'
import axios, { all } from 'axios';
import Loader from '../components/Loader/Loader';
import BookCart from '../components/Book_Cart/BookCart';

function AllBooks() {
const [allBooks, setAllBooks] = useState();
useEffect(() => {
  const fetch = async()=>{
   const response= await axios.get("http://localhost:3000/api/v1/book/getbook");
   setAllBooks(response.data.data);
   
  };
  fetch();

  
}, [])

  return (
    <div className='bg-purple-700 px-4'>
  {!allBooks && ( <div className="flex items-center justify-center my-4">
    <Loader/> 
    </div>
  )}

  <div className= 'my-8 grid grid-cols-5 gap-4'>
{
  allBooks && 
  allBooks.map((items,i)=>(
    <div key={i}> <BookCart data={items}/>{" "}
     </div>
  ))
}    

  </div>
    </div>

  )
}

export default AllBooks