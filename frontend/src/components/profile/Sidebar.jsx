import React from 'react'
import { FaHeart, FaHistory } from 'react-icons/fa'
import { LuLogOut, LuSettings } from 'react-icons/lu'
import { Link, useNavigate } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {authAction} from './../../Store/auth.js'


function Sidebar({ data }) {
   const navigate= useNavigate() 
   const dispatch= useDispatch()
    const handleLogout=(e)=>{
        alert("Logout Successfully");
        console.log("Logout Successfully");

        
    }
    return (
        <div className='bg-purple-900 p-4 rounded flex-col items-center justify-center h-[100%] shadow-lg'>
            <div className='shadow-2xl rounded items-center text-center'>

            <img src={data.avatar} alt={ `${data.username } Avatar`} className='h-[10vh]' />
            <p className='text-xl font-semibold '>{data.username}</p>
            <p className='text-x font-semibold'> {data.useremail}</p>
            <div className='w-full mt-4 h-[1px] bg-slate-300'></div>

            </div>


            <div className='w-full h-full flex-col mt-4 '>

                <div className='grid grid-flow-col hover:bg-purple-950 transition duration-300'>
                <FaHeart className='mt-4 ml-4 ' /><Link to={"/profile"} className='w-full h-full  pt-3   font-semibold rounded hover:bg-purple-950 transition duration-300  text-left items-left justify-left pr-16 py-1'>Favourites </Link> <br />
                </div>


                <div className='grid grid-flow-col hover:bg-purple-950 transition duration-300'>
                <FaHistory className='mt-4 ml-4 '/> <Link to={"/profile/history"} className='w-full h-full  pt-3  font-semibold rounded hover:bg-purple-950  transition duration-300 text-left items-left justify-left pr-11 py-1'>Order History </Link> <br />
                </div>

                <div className='grid grid-flow-col hover:bg-purple-950 transition duration-300'> 
                <LuSettings className='mt-4 ml-4 '/> <Link to={"/profile/settings"} className='w-full h-full pt-3   font-semibold rounded hover:bg-purple-950  transition duration-300  text-left items-left justify-left pr-20 py-1' >Settings</Link> <br />
                                
                
                </div>

                <button  className='grid grid-flow-col hover:bg-purple-950 transition duration-300 pt-3 font-semibold  pr-[100px] py-1
                '  onClick={ ()=>{
                    dispatch(authAction.logout());
                    dispatch(authAction.changeRole("user"));
                    localStorage.clear("id");
                    localStorage.clear("token");
                    localStorage.clear("role");
                    handleLogout();
                    navigate("/")
                    
                    
                }}>
                    <LuLogOut className='mt-1 ml-4  '/> Logout
                    </button><br />

            </div>
        </div>
    )
}

export default Sidebar