import React , { useState, useEffect } from 'react'

import axios from "axios";
import { useParams } from "react-router-dom";
const View_Product = () => {


  const { productId } = useParams();  // Get the product ID from the URL
  const [product, setProduct] = useState(null);  // State to store product details

  // Fetch the product details from backend
  useEffect(() => {
    axios
      .get(`http://localhost:8080/getProduct/${productId}`)  // Replace with your actual API endpoint
      .then((response) => {
        setProduct(response.data);  // Store product details in state
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
      });
  }, [productId]);  // Fetch product when the productId changes

  // Handle adding product to cart (this is a placeholder action)
  const handleAddToCart = () => {
    console.log("Product added to cart:", product);
    // You can update a cart state or make an API call to handle cart functionality
  };

  if (!product) {
    return <div>Loading...</div>;  // Show a loading state while fetching data
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          {/* Product Image */}
          <img src={product.image} alt={product.name} className="img-fluid" />
        </div>
        <div className="col-md-6">
          {/* Product Details */}
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p className="fs-5 fw-bold">&#8377; {product.price}</p>
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
          <p>{product.rating} out of 5</p>

          {/* Add to Cart Button */}
          <button className="btn btn-primary" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};


export default View_Product
