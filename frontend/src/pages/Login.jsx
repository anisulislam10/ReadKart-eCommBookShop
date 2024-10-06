import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GoSignIn } from "react-icons/go";
import {authAction} from './../Store/auth.js'
import {useDispatch} from 'react-redux'
import axios from 'axios';


function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
const navigate=useNavigate();
const dispatch= useDispatch();

  const handleChange = (e) => {
    const {name,value}=e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      if (formData.username === "" || formData.password === "") {
        alert("All fields are required");
      } else {
        const response = await axios.post("http://localhost:3000/api/v1/user/signin", formData);

//change the state
        dispatch(authAction.login());
        dispatch(authAction.login(response.data.role));


        localStorage.setItem("id",response.data.id);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("role",response.data.role)
        // Check if the request was successful
        if (response.status === 200) {
          console.log("Login successful", response.data);
          navigate("/profile")
          // alert(response.data.message)
          // Perform further actions such as redirecting the user
        } else {
          console.log("Login failed", response.data.message);
          alert("Incorrect username or password");
        }
      }
    } catch (error) {
      if (error.response) {
        // Server responded with a status other than 200 range
        console.log("Error response:", error.response.data.message);
        alert("Login error: " + error.response.data.message); // You can show this to the user
      } else if (error.request) {
        // Request was made but no response received
        console.log("No response received:", error.request);
      } else {
        // Something happened in setting up the request
        console.log("Error:", error.message);
      }
    }
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-800">
      <div className="bg-white p-8 rounded shadow-md w-96">
       <div className='grid grid-flow-col items-center'>
       <GoSignIn className=' w-9 h-9'/>
       <h2 className="text-2xl font-bold mb-6 items-center mr-[180px] mt-6">Sign In</h2>
       </div>
      
        <div  className="space-y-4">
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
          <button onClick={handleSubmit} type="submit" className="w-full bg-purple-800 text-white py-2 rounded mt-4 hover:bg-purple-900">
            Sign In
          </button>
        </div>
        <p className="mt-4 text-center">
          Don't have an account? <Link to="/Sign-Up" className="text-purple-600">Sign up here</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
