import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loader from '../Loader/Loader'
import { MdOutlineHourglassEmpty, MdSignalCellularNodata } from 'react-icons/md'
import { FaBatteryEmpty, FaBorderNone, FaThermometerEmpty } from 'react-icons/fa'

function OrderHistory() {
  const [Order, setOrder] = useState()
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
    // bookid:id
  }
  useEffect(() => {
    const fetch=async()=>{
      try {
        const response= await axios.get("http://localhost:3000/api/v1/order/gethistory", {headers})
        setOrder(response.data.data);
        
      } catch (error) {
        console.log(error);
        
      }
    }
    fetch();
    }, [])
  
  return (
    <><h1 className='text-2xl font-semibold'>Order History</h1>
    <div>


{/* when  slow loading product then show loading  */}
{!Order && 
<div className='flex items-center justify-center'>
  <Loader/>
</div>
}

{/* when no data available in order history then show this */}
{ 
Order && Order.length===0  &&
 (
<div className=''>
  <div className='flex items-start text-center justify-center mt-28'>
    <h1 className='text-2xl'>OOPS! Your Order History is Empty</h1>
    </div>
    <MdOutlineHourglassEmpty className='w-20 h-14 mt-3 ml-[500px] '/>
  
</div>
)}

{/* if data available */}
{
  Order && Order.length>0 && (
    <div className='bg-slate-400 rounded w-full flex gap-2 px-2 py-3 font-semibold'>
      <div className='w-[3%]'>
        <h1 className='text-center'>Sr.</h1>
      </div>

      <div className='w-[29%]'>
        <h1 className='text-center'>Books</h1>
      </div>
      
      <div className='w-[45%]'>
        <h1 className='text-center'>Description</h1>
      </div>

      <div className='w-[9%]'>
        <h1 className='text-center'>Price</h1>
      </div>

      <div className='w-[16%]'>
        <h1 className='text-center'>Status</h1>
      </div>

      <div className='w-[5%]'>
        <h1 className='text-center'>Mode</h1>
      </div>

    </div>
  )
}

{/* now map  */}

{Order && Order.map((items,i)=>(
    <div className='bg-slate-500  w-full flex gap-2 px-2 py-3   '>
      <div className='w-[3%]'>
        <h1 className='text-center'>{i+1}</h1>
      </div>

      <div className='w-[29%]'>
        <h1 className='text-center'>{items.book.title}</h1>
      </div>

      <div className='w-[45%]'>
        <h1 className='text-center'>{items.book.desc.slice(0,50)}...</h1>
      </div>

      <div className='w-[9%]'>
        <h1 className='text-center'>{items.book.price}</h1>
      </div>

      <div className='w-[16%]'>
        <h1 className='text-center text-green-400 font-medium shadow-xl rounded'>
          {items.status==="Order placed" ?(
          <div>
            {items.status}
          </div>  
          )
          : items.status=="Canceled" ?(
            <div className=' text-yellow-400 shadow-xl rounded'>{items.status}</div>
          )
          :
           items.status=="Out for delivery" ?(
            <div className=' text-blue-400 shadow-xl rounded'>{items.status}</div>
          )
          :
          (
            items.status
          )
          }
          </h1>
      </div>

      <div className='w-[5%]'>
        <h1 className='text-center text-slate-300 font-medium '>COD</h1>
      </div>

    </div>
  ))
}
    </div></>
  )
}

export default OrderHistory