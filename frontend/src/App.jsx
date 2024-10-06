import {Routes, Route } from 'react-router-dom'; // Fixing the import
import Navbar from './components/Navbar/Navbar';
import Homepage from './pages/Homepage';
import Footer from './components/Footer/Footer';
import AllBooks from './pages/AllBooks';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Profile from './pages/Profile';
import ViewBookDetails from './components/ViewBookDetails/ViewBookDetails';
import { authAction } from './Store/auth.js';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Favourites from './components/profile/Favourites.jsx';
import OrderHistory from './components/profile/OrderHistory.jsx';
import Settings from './components/profile/Settings.jsx';

function App() {
  const dispatch=useDispatch();
  const role=useSelector((state)=>state.auth.role);
  useEffect(() => {
if(
  localStorage.getItem("id") &&
  localStorage.getItem("token") &&
  localStorage.getItem("role")
){
  dispatch(authAction.login());
  dispatch(authAction.changeRole(localStorage.getItem("role")));
}
  }, [])
  
  return (
    <div>
      
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Homepage />} />
          <Route path='/all-books' element={<AllBooks />} />
          <Route path='/Sign-In' element={<Login />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/Sign-Up' element={<Signup />} />
          <Route path='/profile' element={<Profile />} >
          <Route index element={<Favourites/>}/>
          <Route path='/profile/history' element={<OrderHistory/>}/>
          <Route path='/profile/settings' element={<Settings/>}/>
          </Route >
          <Route path='/view-book-details/:id' element={<ViewBookDetails/>} />

        </Routes>
        <Footer />
     
    </div>
  );
}

export default App;
