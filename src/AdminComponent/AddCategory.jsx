import React,{ useState } from 'react'
import axios from 'axios';


    
       const AddCategory = () => {
  const [category, setCategory] = useState({
    name: '',
    image: null,
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCategory((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle file input change
  const handleFileChange = (e) => {
    setCategory((prev) => ({
      ...prev,
      image: e.target.files[0], // Store the file object
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Create FormData to send the file and other fields
      const formData = new FormData();
      formData.append('name', category.name);
      if (category.image) {
        formData.append('file', category.image);
      }

      // Make POST request with Axios
      const response = await axios.post('http://localhost:8080/admin/addCategory', formData
      );

      console.log('Category added:', response.data);
      alert('Category added successfully');
      setCategory({ name: '', image: null }); // Reset form after successful submission
    } catch (error) {
       const errorMessage = error.response?.data || 'Failed to add category. Please try again.';
    console.error('Error adding category:', errorMessage);

    // Show the error message in the alert
    alert(errorMessage);
    }
  };

  return (
    <div>
      <div class="container p-5 mt-5">
        <div class="row">
            <div class="col-md-6 offset-md-3">
                <div class="card-header text-center">
                    <p class="fs-4">Add Category</p>

                    {/* <th:block th:if="${session.succMsg}">
                        <p class="text-success fw-bold">[[${session.succMsg}]]</p>
                        <th:block th:text="${@categoryServiceImpl.removeSessionMessage()}"></th:block>
                    </th:block>

                    <th:block th:if="${session.errorMsg}">
                        <p class="text-danger fw-bold">[[${session.errorMsg}]]</p>
                        <th:block th:text="${@categoryServiceImpl.removeSessionMessage()}"></th:block>
                    </th:block> */}
                </div>
                <div class="card-body">
                    <form onSubmit={handleSubmit}  method="post" encType="multipart/form-data" >
                        <div class="mb-3">
                            <label>Name </label>
                            <input type="text" class="form-control" name="name"
                            value={category.name}
                            onChange={handleChange}
                            />

                        </div>

                        


                        <div class="mb-3 col">
                            <label>Upload image</label>
                            <input type="file" class="form-control" name="file"
                            
                            onChange={handleFileChange}
                            />
                        </div>
                        <button class="btn bg-primary fs-5 text-center col-md-12" type='submit' >Submit</button>


                    </form>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default AddCategory
