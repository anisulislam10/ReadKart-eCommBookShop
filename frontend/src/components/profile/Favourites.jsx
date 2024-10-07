import axios from 'axios';
import React, { useEffect, useState } from 'react'
import BookCart from './../Book_Cart/BookCart'
import { FaStar } from 'react-icons/fa';
import { MdOutlineHourglassEmpty } from 'react-icons/md';
function Favourites() {
  const [favouriteBooks, setFavouriteBooks] = useState()
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
    // bookid:id
  }
  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/v1/favourite/getallfavourite", { headers });
        setFavouriteBooks(response.data.data);

      } catch (error) {
        alert(error);

      }
    }
    fetch();
  }, [favouriteBooks])

  return (


    <><h1 className='text-2xl font-semibold'>Favourites</h1>

      {
        favouriteBooks && favouriteBooks.length === 0 && (
          <div className='mt-44 items-center text-center justify-center font-bold'>
            No Items in Your Favourite lists
            <FaStar width="50%" className='w-24 h-36 ml-[500px]'/>

          </div>
        )
      }

      <div className='grid grid-cols-4 gap-4'>
        {favouriteBooks && favouriteBooks.map((items, i) => <div key={i}>
          <BookCart data={items} favourite={true} />
        </div>)}
      </div></>
  )
}

export default Favourites