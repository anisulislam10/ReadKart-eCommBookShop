import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Fixing the import
import Navbar from './components/Navbar/Navbar';
import Homepage from './pages/Homepage';
import Footer from './components/Footer/Footer';
import AllBooks from './pages/AllBooks';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Profile from './pages/Profile';
import ViewBookDetails from './components/ViewBookDetails/ViewBookDetails';

function App() {
  return (
    <div>
      <Router> {/* Use BrowserRouter correctly */}
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Homepage />} />
          <Route path='/all-books' element={<AllBooks />} />
          <Route path='/Sign-In' element={<Login />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/Sign-Up' element={<Signup />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/view-book-details/:id' element={<ViewBookDetails/>} />

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
