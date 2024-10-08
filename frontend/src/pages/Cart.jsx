import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BookCart from './../components/Book_Cart/BookCart'
import { FaShoppingBag } from 'react-icons/fa'
import { LuDelete } from 'react-icons/lu'
import { MdOutlineAutoDelete } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

function Cart() {
  const navigate=useNavigate();
  const [addToCart, setaddToCart] = useState()
  const [Total, setTotal] = useState(0)
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
    // bookid:id
  }
  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/v1/cart/getfromcart/", { headers });
        setaddToCart(response.data.data);

      } catch (error) {
      console.log(error)
      }
    }
    fetch();
  }, [addToCart])
  const deleteItem = async (bookid) => {
    try {
      const response = await axios.put(`http://localhost:3000/api/v1/cart/removefromcart/${bookid}`, {}, { headers });
      alert(response.data.message);
      

    } catch (error) {
      console.log(error);

    }
  }
  useEffect(() => {
    if (addToCart && addToCart.length > 0) {
      let total = 0;
      addToCart.map((items) => {
        total += items.price;
      });
      setTotal(total);
      total = 0
    }
  }, [addToCart])
const handlePlaceOrder =async()=>{
  try {
    const response= await axios.post("http://localhost:3000/api/v1/order/createorder", {order:addToCart}, {headers});
    alert(response.data.message);
    navigate("/profile/history")
  } catch (error) {
    console.log(error);
    
    
  }
}
  return (
    <div className='grid grid-cols-1 gap-2 mx-[30px] justify-end'>

      {
        addToCart && addToCart.length === 0 && (
          <div className='mt-44 items-center text-center justify-center font-bold'>
            No Items in Your Cart lists
            <FaShoppingBag width="50%" className='w-24 h-36 ml-[350px]' />

          </div>
        )
      }
      {
        addToCart && addToCart.length > 0 && (

          <div className='h-[400px]'>
            <h1 className='text-2xl font-semibold'>Your Cart</h1>
            {
              addToCart.map((items, i) => (
                <div key={i} className='grid grid-cols-3 items-center mx-5 gap-3 mt-1 bg-purple-700 text-white mb-2 '>
                  <img src={items.url} alt={items.title} />
                  <div>
                    <h1 className='text-xl font-semibold'>{items.title}</h1>
                    <p >{items.desc.slice(0, 65)}...</p>
                  </div>
                  <div className='grid grid-cols-2 mx-5 gap-3 mt-1'>
                    <p className='text-2xl font-semibold'>PKR: {items.price}</p>
                    <button onClick={() => deleteItem(items._id)}>
                      <MdOutlineAutoDelete className='w-10 hover:bg-red-600 h-8 shadow-2xl bg-red-500 py-1 rounded text-white' /></button>



                  </div>

                </div>

              ))
            }
          </div>
        )
      }

      {
        addToCart && addToCart.length > 0 && (
          <div className=' w-full flex  items-center justify-end mt-5'>
            <div className='bg-purple-700 w-[200px] items-center text-center text-white rounded'>
              <h1 className='text-xl font-bold '>Your Bill</h1>
              <div className='grid grid-cols-2 w-[190px] items-center text-center justify-center py-2 '>
                <h2 className='font-semibold'>{addToCart.length} Book(s)</h2>
                <h2 className='font-semibold'>PKR {Total}</h2>
              </div>
              <div className='bg-white mx-3 py-2 text-purple-500 hover:bg-purple-500 font-semibold rounded-full hover:text-white'>
                <button onClick={handlePlaceOrder}>Place Your Order</button>
              </div>
            </div>
          </div>
        )
      }

    </div>
  )
}

export default Cart