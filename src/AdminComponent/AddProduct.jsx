import React , { useState, useEffect }   from 'react'
import AdminNavbar from '../NavbarComponent/AdminNavbar'
import axios from 'axios';

const AddProduct = () => {

    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: '',
        category: '',
        image: null,
      });
      const [categories, setCategories] = useState([]);
    
      // Fetch categories from the backend
      useEffect(() => {
        const fetchCategories = async () => {
          try {
            const response = await axios.get('http://localhost:8080/admin/getAllCategories');
            setCategories(response.data); // Populate categories state with the fetched data
          } catch (error) {
            console.error('Error fetching categories:', error.message);
          }
        };
    
        fetchCategories();
      }, []);
    
      // Handle form field changes
      const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct((prev) => ({
          ...prev,
          [name]: value,
        }));
      };
    
      const handleFileChange = (e) => {
        setProduct((prev) => ({
          ...prev,
          image: e.target.files[0],
        }));
      };
    
      const handleSubmit = async (e) => {
        debugger
        e.preventDefault();
    
        try {
          const formData = new FormData();
          formData.append('name', product.name);
          formData.append('description', product.description);
          formData.append('category', product.category);
          formData.append('price', product.price);
          
            formData.append('file', product.image);
          
    
          const response = await axios.post('http://localhost:8080/admin/addProducts', formData);
          alert('Product added successfully');
          setProduct({ name: '', description: '', price: '', category: '', image: null });
        } catch (error) {
          console.error('Error adding product:', error.response?.data || error.message);
          alert('Failed to add product.');
        }
      };
  return (
    <div>
      
      <div class="container p-5 mt-5">
        <div class="row">
            <div class="col-md-6 offset-md-3">
                <div class="card-header text-center">
                    <p class="fs-4">Add Product</p>

                  
                </div>
                <div class="card-body">
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                        <div class="mb-3">
                            <label>Name </label>
                            <input type="text" class="form-control" name="name" 
                             value={product.name}
                             onChange={handleChange}
                             />
                           

                        </div>

                        <div class="mb-3">
                            <label>Description</label>
                            <textarea rows="3" cols="" class="form-control" name="description" 
                            value={product.description}
                            onChange={handleChange}
            >                
            </textarea>

                        </div>
                        <div class="mb-3">
                            <label>Category</label>
                            <select class="form-control" name="category" value={product.category}
                    onChange={handleChange}
                    >
                             <option value="">--Select--</option>
                    {categories.map((category) => (
                      <option key={category.id} value={category.name}>
                        {category.name}
                      </option>
                    ))}
                            </select>

                        </div>

                        <div class="mb-3">
                            <label>Enter Price</label>
                            <input type="number" class="form-control" name="price"
                            value={product.price}
                            onChange={handleChange}
                            />

                        </div>


                        <div class="mb-3 col">
                            <label>Upload image</label>
                            <input type="file" className="form-control" name="file" onChange={handleFileChange} />
                        </div>
                        <button class="btn bg-primary fs-5 text-center col-md-12" >Submit</button>


                    </form>
                </div>
            </div>
            </div>
        </div>

    </div>
    
  )
}

export default AddProduct
