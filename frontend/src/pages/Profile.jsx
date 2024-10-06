import React, { useEffect, useState } from 'react'
import Sidebar from '../components/profile/Sidebar'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios';
import Loader from '../components/Loader/Loader';




function Profile() {
  // const isLoggedIn=useSelector();
  const [profile, setProfile] = useState()
  const headers={
    id: localStorage.getItem("id"),
    authorization:`Bearer ${localStorage.getItem("token")}`
  }
  useEffect(() => {
    const fetch = async()=>{
      try {
        const response = await axios.get("http://localhost:3000/api/v1/user/getuser",{headers});
        setProfile(response.data);
        
        
      } catch (error) {
        console.log(error);
        
        
      }
    };
    fetch();
  }, [])
  

  return (
    <div className='bg-purple-700 h-screen text-white flex flex-row py-8 px-6'>
     {
      !profile && <Loader/>
     }
     { profile && (
       <>
       <div className='w-1/6'>
         <Sidebar data={profile} />
       </div>
       <div className='w-5/6 ml-4'>
         <Outlet />
       </div>
       </>
     )}
    </div>
  )
}

export default Profile