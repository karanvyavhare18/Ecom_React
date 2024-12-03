import React,{useState,useEffect} from 'react'
import AdminNavbar from '../NavbarComponent/AdminNavbar'

import axios from 'axios';


const AdminViewProducts = () => {
  const [products, setProducts] = useState([]); // State to store products
  const [error, setError] = useState("");

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
 
// Empty dependency array ensures it runs only once

  return (
    <div>
      
      <div className="container mt-5">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Sr.no</th>
              <th scope="col"> Name</th>
              <th scope="col">Description</th>
              <th scope="col">Price</th>
              <th scope="col">Category</th>
              <th scope="col">Image</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product.id}>
                <th scope="row">{index + 1}</th>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
                <td>
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{ width: "50px", height: "50px" }}
                  />
                </td>
                <td>
                  <div className="d-flex">
                    <button className="btn btn-warning btn-sm me-2">Edit</button>
                    <button className="btn btn-danger btn-sm">Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminViewProducts
