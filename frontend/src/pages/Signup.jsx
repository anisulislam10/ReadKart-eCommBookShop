import React, { useState } from 'react';
import { SiGnuprivacyguard } from 'react-icons/si';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    useremail: "",
    password: "",
    address: ""
  });
  const navigate=useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    // console.log(handleSubmit);
    
    try {
      if (
        formData.useremail === "" ||
        formData.password === "" ||
        formData.username === "" ||
        formData.address === ""
      ) {
        alert("All Fields are Required")
      }
      else {
        const response= await axios.post("http://localhost:3000/api/v1/user/signup", formData);
        
        alert(response.data.message);
        
        // console.log(formData)
        navigate("/Sign-In")

      }
    } catch (error) {
      console.log("Error response:", error.response.data.message);
      
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-800">
      <div className="bg-white p-8 rounded shadow-md w-96">

        <div className='grid grid-flow-col items-center'>
          <SiGnuprivacyguard className='w-9 h-9' />
          <h2 className="text-2xl font-bold mb-6 items-center mr-[180px] mt-6" >Sign Up</h2>
        </div>

        <div className="space-y-4">
          <div>
            <p className="block mb-2">Username</p>
            <input
              type="text"
              id="username"
              name="username"
              placeholder='username'
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 rounded"
            // required
            />
          </div>
          <div>
            <p  className="block mb-2">Email</p>
            <input
              type="email"
              id="useremail"
              name="useremail"
              placeholder='email@domain.com'
              value={formData.useremail}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
            // required
            />
          </div>
          <div>
            <p className="block mb-2">Password</p>
            <input
              type="password"
              id="password"
              name="password"
              placeholder='**********'
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
            // required
            />
          </div>
          <div>
            <p className="block mb-2">Address</p>
            <input
              type="text"
              id="address"
              name="address"
              placeholder='DHA #2 St #2 h #2 Islamabad'
              value={formData.address}
              onChange={handleChange}
              className="w-full px-2 py-8 border rounded"
            // required
            />
          </div>
          <button onClick={handleSubmit} className="w-full bg-purple-800 text-white py-2 rounded mt-4 hover:bg-purple-900">
            Sign Up
          </button>
        </div>
        <p className="mt-4 text-center">
          Already have an account? <Link to="/Sign-In" className="text-purple-600">Sign in here</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
