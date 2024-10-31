import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loader from '../components/Loader/Loader'
import { MdDetails, MdOutlineDetails, MdOutlineHourglassEmpty } from 'react-icons/md'
import { FaCheck, FaInfo, FaUserAlt, FaUserCog } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import UserDataShowAdmin from './UserData.ShowAdmin'
function Ordersadmin() {
  const [getAllOrder, setAllOrder] = useState()
  const [Options, setOptions] = useState(-1)
  const [Values, setValues] = useState({status:""})
  const [UserDiv, setUserDiv] = useState("hidden");
  const [UserDivData, setUserDivData] = useState()


  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
    // bookid:id
  }

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/v1/order/getallhistoryadmin", { headers });
        setAllOrder(response.data.data);
        console.log(response);


      } catch (error) {
        console.log(error.response.data);


      }
    }
    fetch();
  }, [])
// const setOptionsButton =(i)=>{
// setOptions(i)
// }

const handleStatusChange =(e)=>{
  const {value}= e.target;
  setValues({status: value})
}

const submitChangesCheckButton = async(i)=>{
  try {
    const id=getAllOrder[i]._id;
    const response = await axios.put(`http://localhost:3000/api/v1/order/updatestatus/${id}`,
      Values,
      {headers}
    );
    console.log("update status api");
    console.log(response);
    
    
    
  } catch (error) {
    console.log(error);
    
    
  }
}
  return (
    <>
      <h1 className='text-2xl'>All Orders Admin</h1>
      <div >
        {/* when  slow loading product then show loading   */}
        {!getAllOrder &&
          <div className='flex items-center justify-center'>
            <Loader />
          </div>
        }

        {/* when no data available in order history then show this */}
        {
          getAllOrder && getAllOrder.length === 0 &&
          (
            <div className=''>
              <div className='flex items-start text-center justify-center mt-28'>
                <h1 className='text-2xl'>OOPS! No one Orders Yet</h1>
              </div>
              <MdOutlineHourglassEmpty className='w-20 h-14 mt-3 ml-[500px] ' />

            </div>
          )}

        {/* if data available */}
        {
          getAllOrder && getAllOrder.length > 0 && (
            <div className='bg-slate-400 rounded w-full flex gap-2 px-2 py-3 font-semibold'>
              <div className='w-[3%]'>
                <h1 className='text-center'>Sr.</h1>
              </div>

              <div className='w-[29%]'>
                <h1 className=''>Books</h1>
              </div>

              <div className='w-[45%]'>
                <h1 className=''>Description</h1>
              </div>

              <div className='w-[9%]'>
                <h1 className=''>Price</h1>
              </div>

              <div className='w-[16%]'>
                <h1 className=''>Status</h1>
              </div>

              <div className='w-[5%]'>
                <FaUserAlt />
              </div>

            </div>
          )
        }
        {/* now map  */}

        {
          getAllOrder && getAllOrder.map((items, i) => (
            <div className='flex'>
              <div className='w-[3%]'>
                <h1>{i+1}</h1>
              </div>


              <div className='w-[29%]'>
                <Link to={`/view-book-details/${items.book._id}`}>{items.book?.title ? items.book.title :"No Title Available"}
                </Link>
              </div>


              <div className='w-[45%]'>
              <h1>{items.book?.desc ? items.book.desc.slice(0, 30) : "No description available"}..</h1>
              </div>



              <div className='w-[9%]'>
                <h1>{items.book?.price ? items.book.price : "N/A"}</h1>
              </div>


              <div className='text-black w-[16%]'>
                <h1>
                  <button onClick={()=>setOptions(i)}>
                    {items.status==="Order Placed" ? (
                      <div className='text-green-600'>{items.status}</div>
                     ) : items.status==="Canceled" ?(
                      <div className='bg-red-600'>{items.status}</div>
                      ) : (
                       <div className='bg-blue-500'>{items.status}</div>
                    )
                  }
                  </button>



                  {
                    Options===i && (
                      <div className="">
                  <select name="status" id="" onChange={handleStatusChange} value={Values.status}>
                    {[
                      'Order Placed',
                      'Out for delivery',
                      'Delivered',
                      'Canceled'
                    ].map((items, i) => (
                      <option value={items} key={i}>{items}</option>
                    ))}

                  </select>
                  <button onClick={()=>{
                    setOptions(-1);
                    submitChangesCheckButton(i);
                  }} className=' text-white px-2'> <FaCheck/> </button>
                </div> 
                    )
                  }

                </h1>
              </div>
              <div className='w-[5%]'>
                <button onClick={()=>{
                    setUserDiv("fixed");
                    setUserDivData(items.user)
                }}><FaInfo/></button>
                {/* <FaUserAlt /> */}

                
              </div>
            </div>
          ))
        }

        {
          UserDivData && (
            <UserDataShowAdmin 
            UserDivData={UserDivData}
            UserDiv={UserDiv}
            setUserDiv={setUserDiv}
            />
          )
        }

        {/* 
            <div className='w-[16%]'>
              <h1 className='text-center text-green-400 font-medium shadow-xl rounded'>
                <button>
                  {
                    items.status === "Order Placed" ? (
                      <div>{items.status}</div>
                    ) :

                      items.status === "Canceled" ? (
                        <div>{items.status}</div>
                      ) :
                        (
                          <div>{items.status}</div>
                        )
                  }
                </button>
               
              </h1>
            </div> */}
        {/* 
            <div className='w-[5%]'>
            </div> */}

      </div>
      
      </>
  )
}

export default Ordersadmin