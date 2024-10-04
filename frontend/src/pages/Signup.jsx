import React, { useState } from 'react';
import { SiGnuprivacyguard } from 'react-icons/si';
import { Link } from 'react-router-dom';

function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    address: ''
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
<SiGnuprivacyguard className='w-9 h-9'/>
<h2 className="text-2xl font-bold mb-6 items-center mr-[180px] mt-6" >Sign Up</h2>

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
            <label htmlFor="email" className="block mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder='email@domain.com'
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-2">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder='**********'
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="address" className="block mb-2">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder='DHA #2 St #2 h #2 Islamabad'
              value={formData.address}
              onChange={handleChange}
              className="w-full px-2 py-8 border rounded"
              required
            />
          </div>
          <button type="submit" className="w-full bg-purple-800 text-white py-2 rounded mt-4 hover:bg-purple-900">
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center">
          Already have an account? <Link to="/Sign-In" className="text-purple-600">Sign in here</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
