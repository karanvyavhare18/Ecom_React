// import React from 'react'

// import Header from './Header'
// import Footer from './Footer'
// import LaptopImg from '../Images/Laptopimg1.jpg';
import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header"; // Adjust the import path
import Navbar from "../NavbarComponent/Navbar";
import AdminNavbar from "../NavbarComponent/AdminNavbar";
import { Link } from "react-router-dom";
// import LaptopImg from "./laptop-placeholder.jpg"; // Replace with a placeholder or remove if `product.image` is fetched

const HomePage = ({ role, setRole }) => {

  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth", // Smooth scrolling animation
    });
};
  const [products, setProducts] = useState([]); // State to store products

  // Fetch products from backend
  useEffect(() => {
    axios
      .get("http://localhost:8080/getAllProducts") // Replace with your actual endpoint
      .then((response) => {
        setProducts(response.data); // Update the state with the products
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    
    <div>
      

      <Header />

      <div className="container-fluid">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <p className="text-center fs-2">Products</p>

              <div className="card shadow-sm p-3 mb-5 bg-body-tertiary rounded">
                <div className="row">
                  {/* Iterate over products */}
                  {products.map((product) => (
                    <div className="col-md-3 mb-4" key={product.id}>
                      <div className="card">
                        <div className="card-body">
                          {/* Product Image */}
                          {/* <img src={"http://localhost:8080/images/iphoneimg.jpg"} */}
                          <img src={product.image}
                            width="100%"
                            height="150px"
                           
                          />
                          {/* Product Name */}
                          <p className="fs-5">{product.name}</p>
                          {/* Product Description */}
                          <p className="fs-6">{product.description}</p>
                          {/* Product Price */}
                          <p className="fs-6 fw-bold">&#8377; {product.price}</p>
                          {/* Product Rating */}
                          <div className="rating">
                            {Array.from({ length: 5 }, (_, i) => (
                              <span
                                className="star"
                                key={i}
                                style={{
                                  color: i < Math.round(product.rating) ? "gold" : "gray",
                                }}
                              >
                                &#9733;
                              </span>
                            ))}
                          </div>
                          <p className="fs-6">{product.rating} out of 5</p>
                          {/* View Details Button */}
                          <Link to={`/product/${product.id}`} className="btn btn-primary">
                    View Details
                  </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;








// const HomePage = () => {
//   return (
//     <div>
//         <Header/>
      
//       <div class="container-fluid">
//       <div class="col-md-12 ">

// <div class="card">
//     <div class="card-body">
//         <p class="text-center fs-2">Products</p>

//         <div class="card shadow-sm p-3 mb-5 bg-body-tertiary rounded">
//             <div class="row">
//                 <div class="col-md-3" >
//                     <div class="card">
//                         <div class="card-body  ">
//                             <img src={LaptopImg} width="100%" height="150px"    alt='Laptopimg' />
//                             <p class="fs-5 ">Apple MacBook Air Laptop</p>
//                                <p class="fs-5">Apple M1 chip,
//                                13.3-inch/33.74 cm Retina Display, 8GB RAM, 256GB SSD Storage</p>
//                             <div class="row ">
//                                 <p class="fs-6 fw-bold">
//                                     &#8377; 50000 </p>
//                                     <div class="rating">
//     <span class="star">&#9733;</span>
//     <span class="star">&#9733;</span>
//     <span class="star">&#9733;</span>
//     <span class="star">&#9733;</span>
//     <span class="star">&#9734;</span> 
// </div>
// <p class="fs-6">4.0 out of 5</p>
//                                 <a class="btn bg-primary fs-6  col-md-6 offset-md-3 "
//                                    href="">View Details</a>
//                             </div>


//                         </div>
//                     </div>
//                 </div>


//                 {/*remove code start*/}
//                 <div class="col-md-3" >
//                     <div class="card">
//                         <div class="card-body ">
//                             <img src={LaptopImg} width="100%" height="150px" alt='Laptopimg' />
//                             <p class="fs-5 ">Apple MacBook Air Laptop</p>
//                                <p class="fs-5">Apple M1 chip,
//                                13.3-inch/33.74 cm Retina Display, 8GB RAM, 256GB SSD Storage</p>
//                             <div class="row ">
//                                 <p class="fs-6 fw-bold">
//                                     &#8377; 50000 </p>
//                                     <div class="rating">
//     <span class="star">&#9733;</span>
//     <span class="star">&#9733;</span>
//     <span class="star">&#9733;</span>
//     <span class="star">&#9733;</span>
//     <span class="star">&#9734;</span> 
// </div>
// <p class="fs-6">4.0 out of 5</p>
//                                 <a class="btn bg-primary fs-6  col-md-6 offset-md-3"
//                                    href="">View Details</a>
//                             </div>


//                         </div>
//                     </div>
//                 </div>
//                 <div class="col-md-3" >
//                     <div class="card">
//                         <div class="card-body ">
//                             <img src={LaptopImg} width="100%" height="150px" alt='Laptopimg' />
//                             <p class="fs-5 ">Apple MacBook Air Laptop</p>
//                                <p class="fs-5">Apple M1 chip,
//                                13.3-inch/33.74 cm Retina Display, 8GB RAM, 256GB SSD Storage</p>
//                             <div class="row ">
//                                 <p class="fs-6 fw-bold">
//                                     &#8377; 50000 </p>
//                                     <div class="rating">
//     <span class="star">&#9733;</span>
//     <span class="star">&#9733;</span>
//     <span class="star">&#9733;</span>
//     <span class="star">&#9733;</span>
//     <span class="star">&#9734;</span> 
// </div>
// <p class="fs-6">4.0 out of 5</p>
//                                 <a class="btn bg-primary fs-6  col-md-6 offset-md-3 "
//                                    href="">View Details</a>
//                             </div>


//                         </div>
//                     </div>
//                 </div>
//                 <div class="col-md-3" >
//                     <div class="card">
//                         <div class="card-body ">
//                             <img src={LaptopImg} width="100%" height="150px" alt='Laptopimg' />
//                             <p class="fs-5 ">Apple MacBook Air Laptop</p>
//                                <p class="fs-5">Apple M1 chip,
//                                13.3-inch/33.74 cm Retina Display, 8GB RAM, 256GB SSD Storage</p>
//                             <div class="row ">
//                                 <p class="fs-6 fw-bold">
//                                     &#8377; 50000 </p>
//                                     <div class="rating">
//     <span class="star">&#9733;</span>
//     <span class="star">&#9733;</span>
//     <span class="star">&#9733;</span>
//     <span class="star">&#9733;</span>
//     <span class="star">&#9734;</span> 
// </div>
// <p class="fs-6">4.0 out of 5</p>
//                                 <a class="btn bg-primary fs-6  col-md-6 offset-md-3 "
//                                    href="">View Details</a>
//                             </div>


//                         </div>
//                     </div>
//                 </div>
//                 <div class="col-md-3" >
//                     <div class="card">
//                         <div class="card-body ">
//                             <img src={LaptopImg} width="100%" height="150px" alt='Laptopimg' />
//                             <p class="fs-5 ">Apple MacBook Air Laptop</p>
//                                <p class="fs-5">Apple M1 chip,
//                                13.3-inch/33.74 cm Retina Display, 8GB RAM, 256GB SSD Storage</p>
//                             <div class="row ">
//                                 <p class="fs-6 fw-bold">
//                                     &#8377; 50000 </p>
//                                     <div class="rating">
//     <span class="star">&#9733;</span>
//     <span class="star">&#9733;</span>
//     <span class="star">&#9733;</span>
//     <span class="star">&#9733;</span>
//     <span class="star">&#9734;</span> 
// </div>
// <p class="fs-6">4.0 out of 5</p>
//                                 <a class="btn bg-primary fs-6  col-md-6  offset-md-3"
//                                    href="">View Details</a>
//                             </div>


//                         </div>
//                     </div>
//                 </div>
//                 <div class="col-md-3" >
//                     <div class="card">
//                         <div class="card-body ">
//                             <img src={LaptopImg} width="100%" height="150px" alt='Laptopimg' />
//                             <p class="fs-5 ">Apple MacBook Air Laptop</p>
//                                <p class="fs-5">Apple M1 chip,
//                                13.3-inch/33.74 cm Retina Display, 8GB RAM, 256GB SSD Storage</p>
//                             <div class="row ">
//                                 <p class="fs-6 fw-bold">
//                                     &#8377; 50000 </p>
//                                     <div class="rating">
//     <span class="star">&#9733;</span>
//     <span class="star">&#9733;</span>
//     <span class="star">&#9733;</span>
//     <span class="star">&#9733;</span>
//     <span class="star">&#9734;</span> 
// </div>
// <p class="fs-6">4.0 out of 5</p>
//                                 <a class="btn bg-primary fs-6  col-md-6 offset-md-3 "
//                                    href="">View Details</a>
//                             </div>


//                         </div>
//                     </div>
//                 </div>
//                 {/* remove code end */}


//             </div>


//         </div>












//     </div>

// </div> 





// </div>
//      </div>
//       <Footer/>
//     </div>
//   )
// }

// export default HomePage
