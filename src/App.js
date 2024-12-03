
import './App.css';
import Navbar from './NavbarComponent/Navbar';
import {  Routes, Route, useNavigate  } from 'react-router-dom';
import { useState,useEffect } from "react";
import Home from './NavbarComponent/Home';
import AboutUs from './NavbarComponent/AboutUs';
import ContactUs from './NavbarComponent/ContactUs';
import HomePage from './HomePageComponent/HomePage';
import Footer from './HomePageComponent/Footer'
import Registration from './UserComponent/Registration';
import Login from './UserComponent/Login';
import AdminNavbar from './NavbarComponent/AdminNavbar';
import AdminHomePage from './AdminComponent/AdminHomePage';
import AddProduct from './AdminComponent/AddProduct';
import AdminViewProducts from './AdminComponent/AdminViewProducts';
import AddCategory from './AdminComponent/AddCategory';
import axios from 'axios';
import View_Product from './UserComponent/View_Product';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Manage login state
  const [role, setRole] = useState(""); // Manage user role (admin/user)
  const navigate = useNavigate();
  useEffect(() => {
    const savedIsAuthenticated = localStorage.getItem("isAuthenticated");
    const savedRole = localStorage.getItem("role");
    if (savedIsAuthenticated && savedRole) {
      setIsAuthenticated(JSON.parse(savedIsAuthenticated));
      setRole(savedRole);
    }
  }, []);

  // Save state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("isAuthenticated", isAuthenticated);
    localStorage.setItem("role", role);
  }, [isAuthenticated, role]);
  const logout = async   () => {
    setIsAuthenticated(false);
    setRole("");
    await axios.post("http://localhost:8080/logout");
    sessionStorage.clear(); // Clear client-side session data
    alert("Logged out successfully!");
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("role");
    navigate('/'); // Redirect to HomePage after logout
  };
  return (
    <div>{!isAuthenticated && (
      <Navbar isAuthenticated={isAuthenticated} logout={logout} /> // Guest Navbar
    )}
    {isAuthenticated && role === "user" && (
      <Navbar isAuthenticated={isAuthenticated} logout={logout} /> // User Navbar
    )}
    {isAuthenticated && role === "admin" && (
      <AdminNavbar setIsAuthenticated={setIsAuthenticated} setRole={setRole} /> // Admin Navbar
    )}
   
   <Routes>
    <Route path='/' element={<HomePage/>}></Route>
    <Route path='/top' element={<HomePage/>}></Route>
    <Route path='/aboutUs' element={<AboutUs/>}></Route>
    <Route path='/contactUs' element={<ContactUs/>}></Route>
    <Route path='/register' element={<Registration/>}></Route>
    <Route
          path="/login"
          element={<Login setIsAuthenticated={setIsAuthenticated} setRole={setRole} />}
          
        />
     {isAuthenticated && role === "admin" && (
          <>
            <Route path="/admin/addProduct" element={<AddProduct />} />
            <Route path="/admin/viewProducts" element={<AdminViewProducts />} />
            <Route path="/admin/addCategory" element={<AddCategory />} />
            <Route path="/admin/home" element={<AdminHomePage />} />
          </>
        )}

        {/* User routes */}
        {isAuthenticated && role === "user" && (
          <>
            <Route path="/user/home" element={<HomePage />} />
            <Route path="/product/:productId" element={<View_Product/>} /> {/* Route for Product Detail */}
            {/* Add other user-specific routes here */}
          </>
        )}
         <Route path="/product/:productId" element={<View_Product/>} /> {/* Route for Product Detail */}
    </Routes>
   
   <Footer />

    </div>
    
  );
}

export default App;
