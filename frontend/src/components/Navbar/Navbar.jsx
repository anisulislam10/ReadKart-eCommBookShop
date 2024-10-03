import React from 'react'
import logoReadKart from '../../assets/ReadKart-logo/logo.png'
import { Link } from 'react-router-dom';

function Navbar() {

    const links = [
        {
            title: "Home",
            link: "/",
        },

        // {
        //     title: "About Us",
        //     link: "/about-us"
        // },
        {
            title: "All Books",
            link: "/all-books"
        },
        {
            title: "Cart",
            link: "/cart"
        },

        {
            title: "Profile",
            link: "/profile"
        },
    ];

    return (
        <div>
            <div className=' flex bg-purple-600 text-white px-8 py-4 items-center justify-between shadow-md'>
                <div className='flex'>
                    <img
                        className='h-8 bg-white rounded '
                        src={logoReadKart} alt="logo" /><a href="http://localhost:5173/"></a>
                    <Link to="/" className='text-2xl font-semibold cursor-pointer rounded  bg-purple-700  '>Read<span className='text-white  px-1'>Kart</span> </Link>
                </div>

                <div className='nav-links-Readkart flex items-center gap-4'>
                  
                  <div className='flex gap-3' >
                  {
                        links.map((items,i)=>(
                            <Link to={items.link} className='hover:text-blue-300 transition-all duration-300' key={i}>{items.title}{" "} </Link>
                        ))
                    }
                  </div>
                  <div className='flex  gap-4'>
                    <Link to="/Sign-In" className='px-2 py-1 border border-white rounded hover:bg-white hover:text-black transition-all duration-300'>Sign-In</Link>
                    <Link to="/Sign-Up" className='px-2 py-1 border border-white bg-purple-800 rounded hover:bg-white  hover:text-black transition-all duration-300'>Sign-Up</Link>

                  </div>
                  
                </div>
            </div>
        </div>
    )
}

export default Navbar