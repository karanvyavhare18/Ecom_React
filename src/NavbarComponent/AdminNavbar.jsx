import React from 'react'

import logo from '../Images/ecomlogo.jpg';

import { Link } from 'react-router-dom';

const AdminNavbar = ({ setIsAuthenticated, setRole }) => {
  const handleLogout = () => {
    setIsAuthenticated(false);
    setRole(""); // Reset role to empty
};

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
      <Link to="/admin/home" class="nav-link active" aria-current="page" href="#">Admin Dashboard</Link>         
        </li>
        
      <li class="nav-item">
      <Link to="/admin/addProduct" class="nav-link active" aria-current="page" href="#">Add Product</Link>         
        </li>

        <li class="nav-item">
        <Link to="/admin/viewProducts" class="nav-link active" aria-current="page" href="#">View Products</Link>         
        </li>


      {/* <li><Link to="/admin/home">Dashboard</Link></li> */}
                {/* <li><Link to="/admin/addProduct">Add Product</Link></li>
                <li><Link to="/admin/viewProducts">View Products</Link></li> */}
                {/* <li><button onClick={handleLogout}>Logout</button></li> */}


         {/* <li class="nav-item " style={{ width: '40px',height :'40px', marginRight: '5px' }}>
          <a class="nav-link active" aria-current="page" href="#">Admin View Page</a>
        </li> */}
        {/* <li class="nav-item">
          <Link to="/contactUs" class="nav-link active" aria-current="page" href="#">Contact Us</Link>
        </li>  */}
        
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
       
        

           
      </ul>
      <div className="d-flex align-items-center  ">
            
      
        <h1 style={{  marginRight: '500px' }}>  Admin View </h1>
       
        

              <button className="btn btn-outline-success bg-primary me-2 text-light" type="button"  onClick={handleLogout}>Log Out</button>
            </div>
     
            {/* <li><button onClick={handleLogout}>Logout</button></li> */}
</div>
      
   
  </div>
</nav>
    </div>
  )
}

export default AdminNavbar
