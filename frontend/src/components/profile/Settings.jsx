import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loader from '../Loader/Loader'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
const Settings = () => {
 
  const [profile, setprofile] = useState()
  const [value, setvalue] = useState({address: ""})
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
    // bookid:id
  }
  useEffect(() => {
    const fetch= async()=>{
      const response= await axios.get("http://localhost:3000/api/v1/user/getuser",{headers})
      setprofile(response.data);
      setvalue({address: response.data.address});

      
    }
    fetch();
  }, [])
  

  const handleAddress= (e)=>{
const {name,value}=e.target;
setvalue({...value,[name]:value})
  }

  const handleUpdate= async()=>{
    const response= await axios.put("http://localhost:3000/api/v1/user/updateaddress", value,{headers});
   alert(response.data.message);
    
  }
  return (
    <><h1 className='text-2xl font-semibold'>Settings</h1>
    
    <div>
       
        { !profile && (
          <div>
          
            <Loader/>
            </div>
          )
        }

        {
          profile && (
            <div className='bg-purple-900 rounded py-16'>
              <div className=' flex gap-14 py-1 mx-11'>
                <div className='text-xl'>
                  <label className='' htmlFor="">username</label>
                  <p className='bg-slate-800 rounded px-2 py-2'>{profile.username}</p>
                </div>


                <div className='text-xl'>
                  <label htmlFor="">useremail</label>
                  <p className='bg-slate-800 rounded px-2 py-2'>{profile.useremail}</p>
                </div>
              </div>

              <div className='mx-10 rounded mt-7 '>
                <label htmlFor="">Address</label>
                <textarea className='bg-white text-black  w-full px-3  ' name="address" id="" rows="5" placeholder='address' onChange={handleAddress} value={value.address}></textarea>
              </div>

              <div className='bg-purple-600 flex justify-center font-extralight rounded w-[80px] ml-[950px] mt-3 hover:bg-purple-700 py-1'>
                <button onClick={handleUpdate}>Update</button>
              </div>
            </div>
          )
        }
    </div></>
  )
}

export default Settings