import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  
    <div>
      <h1 className='bg-red-400 h-screen text-white text-[30px] items-center text-center pt-[300px] shadow-lg font-bold'>Welcome to ReadKart Initial Setup</h1>
    </div>
  )
}

export default App
