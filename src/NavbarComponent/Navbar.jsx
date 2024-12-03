import React from 'react';
import logo from '../Images/ecomlogo.jpg';
// import cart from '../Images/cartimg.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping }  from  '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate  } from 'react-router-dom';
const Navbar = ({ isAuthenticated, logout }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login"); // Navigate to the login page
};

// const handleLogout = () => {
//   setIsAuthenticated(false);
//   setRole(""); // Reset role to empty
// };

  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-dark navbar-dark  ">
  <div class="container-fluid">
  <a className="navbar-brand text-dark" href="#">
            <img src={logo} alt="E-commerce Logo" style={{ width: '120px',height :'80px', marginRight: '5px' }} />
            
          </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse text-light" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">

        
      <li class="nav-item">
          <Link to="/" class="nav-link active" aria-current="page" href="#">Home</Link>
        </li>
        <li class="nav-item">
          <Link to="/aboutUs" class="nav-link active" aria-current="page" href="#">About Us</Link>
        </li>
        <li class="nav-item">
          <Link to="/contactUs" class="nav-link active" aria-current="page" href="#">Contact Us</Link>
        </li>
        
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle active" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Product Categories
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="">Action</a></li>
            <li><a class="dropdown-item" href="">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="">Something else here</a></li>
          </ul>
        </li>
       
        <form className="d-flex" role="search" style={{ width: "700px" }}>
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success bg-primary text-light" type="submit">Search</button>
            </form>

           
      </ul>
      <div className="d-flex align-items-center  ">
              
              <a className="nav-link active" href="#" style={{ color: 'white' }}>
              <FontAwesomeIcon icon={faCartShopping} size="2x"  />Cart </a>

              {!isAuthenticated ? (
          <Link to="/login" className="btn btn-primary">Login</Link>
        ) : (
          <li>
            <button className='btn btn-primary' onClick={logout}>Logout</button> {/* Logout button only when logged in */}
          </li>
        )}
             {/* <Link to="/login"> <button  className="btn btn-outline-success bg-primary me-2 text-light"  type="button" >Login</button></Link> */}
            </div>
     
       
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
