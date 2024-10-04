import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GoSignIn } from "react-icons/go";


function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Submit the form data
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-800">
      <div className="bg-white p-8 rounded shadow-md w-96">
       <div className='grid grid-flow-col items-center'>
       <GoSignIn className=' w-9 h-9'/>
       <h2 className="text-2xl font-bold mb-6 items-center mr-[180px] mt-6">Sign In</h2>
       </div>
      
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block mb-2">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder='username'
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-2">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder='*******'
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 rounded"
              required
            />
          </div>
          <button type="submit" className="w-full bg-purple-800 text-white py-2 rounded mt-4 hover:bg-purple-900">
            Sign In
          </button>
        </form>
        <p className="mt-4 text-center">
          Don't have an account? <Link to="/Sign-Up" className="text-purple-600">Sign up here</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
