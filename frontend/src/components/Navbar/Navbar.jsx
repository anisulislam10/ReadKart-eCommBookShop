import React from 'react';
import logoReadKart from '../../assets/ReadKart-logo/logo.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

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
        {
            title: "Admin Profile",
            link: "/profile"
        },
    ];

    const isLoggedIn = useSelector((state) => state.auth.isLoggedin);
    const role = useSelector((state) => state.auth.role);

    console.log(isLoggedIn);
    if (isLoggedIn === false) {
        links.splice(2, 2);
    }

    if (isLoggedIn === true && role === "admin") {
        links.splice(4, 1);
    }

    if (isLoggedIn === true && role === "admin") {
        links.splice(3, 1);
    }

    return (
        <div>
            <div className='flex bg-purple-600 text-white px-8 py-4 items-center justify-between shadow-md'>
                <div className='flex'>
                    <img
                        className='h-8 bg-white rounded'
                        src={logoReadKart} alt="logo" />
                    <Link to="/" className='text-2xl font-semibold cursor-pointer rounded bg-purple-700'>Read<span className='text-white px-1'>Kart</span></Link>
                </div>

                <div className='nav-links-Readkart flex items-center gap-4'>
                    <div className='flex gap-3'>
                        {
                            links.map((items, i) => (
                                <div key={i}>
                                    <Link to={items.link} className='hover:text-blue-300 transition-all duration-300'>
                                        {items.title}
                                    </Link>
                                </div>
                            ))
                        }
                    </div>

                    {
                        isLoggedIn === false &&
                        <div className='flex gap-4'>
                            <Link to="/Sign-In" className='px-2 py-1 border border-white rounded hover:bg-white hover:text-black transition-all duration-300'>Sign-In</Link>
                            <Link to="/Sign-Up" className='px-2 py-1 border border-white bg-purple-800 rounded hover:bg-white hover:text-black transition-all duration-300'>Sign-Up</Link>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default Navbar;
