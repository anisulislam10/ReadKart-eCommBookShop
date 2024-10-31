import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function BookCart({ data, favourite }) {
  const headers = {
    id: localStorage.getItem("id"),
    authorization:`Bearer ${localStorage.getItem("token")}`,  
    bookid: data._id
  };
  const handleRemoveFromFavourites = async () => {
    try {
      const response = await axios.put("http://localhost:3000/api/v1/cart/removefromcart", {}, { headers });
      alert(response.data.message);

    } catch (error) {
      console.log(error);
    }
  }
  // console.log(data);

  return (
    <>
      <Link to={`/view-book-details/${data._id}`}>

        <div className='bg-purple-800 rounded p-4 flex flex-col   '>
          <div className='bg-purple-900 flex items-center justify-center hover:bg-purple-700 hover:transition duration-1000 '>
            <img src={data.url} alt={data.title} className='w-[150px] rounded shadow-lg border-2 border-black' />
          </div>
          <h2 className='text-xl text-yellow-100 font-semibold text-left'>{data.title}</h2>
          <p className='  text-purple-400 font-semibold text-left underline'>By:{data.author} </p>
          <p className=' text-purple-400 font-semibold text-left'>PKR:{data.price} /-</p>
        </div>
      </Link>
      <div>
        {
          favourite && (
            <button onClick={handleRemoveFromFavourites}
             className=' bg-red-400 text-white  rounded border border-red-500  px-7'
            >❌ Remove From Favourites</button>
          )}
      </div>
    </>
  )
}

export default BookCart