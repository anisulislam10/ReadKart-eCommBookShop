import React from 'react'
import Hero from '../components/Home/Hero'
import RecentlyAddedBooks from '../components/Home/RecentlyAddedBooks'

function Homepage() {
  return (
    <div className='bg-purple-700 text-white px-10 py-8'>
        <Hero/>
        <RecentlyAddedBooks/>

    </div>
    
  )
}

export default Homepage