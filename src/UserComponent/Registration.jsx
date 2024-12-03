import React, { useState } from 'react'
import registration_page_img from '../Images/registration_page_img.jpg';
import {Link} from 'react-router-dom'
// import { toast } from 'react-toastify';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Registration = () => {

 
    const [user,setNewUser]=useState({
      name:"",
      email:"",
      address:"",
      city:"",
      mobileNumber:"",
      password:"",

    });
    const [errors, setErrors] = useState({});

  //   const [formErrors, setFormErrors] = useState({});
  //   const [isSubmit,setIsSubmit]=useState(false);

    const handleChange=(e)=>{
      const value=e.target.value;
      setNewUser({
        ...user,[e.target.name]:value
      });

    };
    
  // // const addUser=(e)=>{
  // //     e.preventDefault();
  // //     userService.save(user)
  // //     .then((res)=>{
        
  // //    setNewMsg("User Added")
  // //     }).catch((error)=>{
  // //       console.log(error);
  // //     })
  // // }


  // const validate=(values)=>{
  //   const errors={};
  //   const regex=/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,6}$/i;
  //   if(!values.name){
  //     errors.name="name is required";
  //   }
  //   if(!values.email){
  //     errors.name="email is required";
  //   }
  //   if(!values.address){
  //     errors.name="Address is required";
  //   }
  //   if(!values.city){
  //     errors.name="city is required";
  //   }
  //   if(!values.number){
  //     errors.name="number is required";
  //   }
  //   if(!values.password){
  //     errors.name="password is required";
  //   }
  //   if(!values.role){
  //     errors.name="role is required";
  //   }
  //   return errors;
  // }
  const validateForm = () => {
    const newErrors = {};

    if (!user.name) {
      newErrors.name = 'Name is required';
    } else if (user.name.length < 3) {
      newErrors.name = 'Name must be at least 3 characters';
    } else if (!/^[A-Za-z\s]+$/.test(user.name)) {
      newErrors.name = 'Name must contain only letters';
    }
  
    // Email validation: required, valid format
    if (!user.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(user.email)) {
      newErrors.email = 'Invalid email format';
    }
  
    // Address validation: required, minimum 5 characters
    if (!user.address) {
      newErrors.address = 'Address is required';
    } else if (user.address.length < 5) {
      newErrors.address = 'Address must be at least 5 characters';
    }
  
    // City validation: required, alphabet-only
    if (!user.city) {
      newErrors.city = 'City is required';
    } else if (!/^[A-Za-z\s]+$/.test(user.city)) {
      newErrors.city = 'City must contain only letters';
    }
  
    // Mobile number validation: required, numeric-only, exact 10 digits
    if (!user.mobileNumber) {
      newErrors.mobileNumber = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(user.mobileNumber)) {
      newErrors.mobileNumber = 'Mobile number must be exactly 10 digits';
    }
    if (!user.role) newErrors.role = "Required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const addUser = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please correct the errors", { position: "top-center", autoClose: 2000 });
      return;
    }
    // POST request to register the user
    axios
      .post('http://localhost:8080/saveUser', user)
      .then((response) => {
        // If registration is successful, show success toast
        toast.success("Registered Successfully!!!", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        console.log("Response:", response.data);
      })
      .catch((error) => {
        // If an error occurs, show error toast
        toast.error("Registration failed ", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        console.error("Error:", error);
      });
  };












  return (

    <div>
          <div class="container mt-5">
      <div class="card border-light-subtle shadow-sm ">
        <div class="row g-0">
          <div class="col-12 col-md-6">
            <img class="img-fluid  w-100 h-100 " loading="lazy" src={registration_page_img} alt="BootstrapBrain Logo"/>
          </div>
          <div class="col-12 col-md-6">
            <div class="card-body p-3 p-md-4 p-xl-5">
              <div class="row">
                <div class="col-12">
                  <div class="mb-5">
                    <h2 class="h3">Registration</h2>
                    <h3 class="fs-6 fw-normal text-secondary m-0">Enter your details to register</h3>
                    {/* {msg && <p className='text-success'>{msg}</p>} */}
                  </div>
                </div>
              </div>
              <form onSubmit={ addUser}>
                <div class="row gy-3 gy-md-4 overflow-hidden">
                  <div class="col-12">
                    <label for="firstName" class="form-label">Full Name <span class="text-danger">*</span></label>
                    <input type="text" class="form-control" name="name" id="firstName" placeholder="First Name" 
                    value={user.name}
                    onChange={handleChange} 
                    required/>
                     {errors.name && <small className="text-danger">{errors.name}</small>}
                  </div>
                  
                  <div class="col-12">
                    <label for="email" class="form-label">Email <span class="text-danger">*</span></label>
                    <input type="email" class="form-control" name="email" id="email" placeholder="name@example.com" 
                    value={user.email}
                    onChange={handleChange}
                    required/>
                    {errors.email && <small className="text-danger">{errors.email}</small>}
                  </div>

                  <div class="col-12">
                    <label for="address" class="form-label">Address <span class="text-danger">*</span></label>
                    <input type="text" class="form-control" name="address" id="lastName" placeholder="Address"
                    value={user.address}
                    onChange={handleChange}
                    required/>
                    {errors.address && <small className="text-danger">{errors.address}</small>}
                  </div>

                  <div class="col-12">
                    <label for="city" class="form-label">City <span class="text-danger">*</span></label>
                    <input type="text" class="form-control" name="city" id="city" placeholder="City"
                    value={user.city}
                    onChange={handleChange}
                    required/>
                    {errors.city && <small className="text-danger">{errors.city}</small>}
                  </div>



                  <div class="col-12">
                    <label for="Number" class="form-label">Number <span class="text-danger">*</span></label>
                    <input type="number" class="form-control" name="mobileNumber" id="number" placeholder="Number"
                    value={user.mobileNumber}
                    onChange={handleChange}
                    minLength="10"  maxLength="10"
                    required/>
                     {errors.mobileNumber && <small className="text-danger">{errors.mobileNumber}</small>}
                  </div>


                  <div class="col-12">
                    <label for="password" class="form-label">Password <span class="text-danger">*</span></label>
                    <input type="password" class="form-control" name="password" id="password" 
                    value={user.password} 
                    onChange={handleChange}
                    required/>
                    {errors.password && <small className="text-danger">{errors.password}</small>}
                  </div>
                  <div className="col-12">

    <label htmlFor="role" className="form-label">Role <span className="text-danger">*</span></label>
    <select
        className="form-control"
        name="role"
        id="role"
        value={user.role}
        onChange={handleChange}
        required
    >
        <option value="" >Select Role</option>
        <option value="user">User</option>
        <option value="admin">Admin</option>
    </select>
    {errors.role && <small className="text-danger">{errors.role}</small>}
</div>
                  
                  <div class="col-12">
                    <div class="d-grid">
                      <button class="btn bsb-btn-xl btn-primary" type="submit">Sign up</button>
                    </div>
                  </div>
                </div>
               
              </form>
              <ToastContainer/>
              <div class="row">
                <div class="col-12">
                  <hr class="mt-5 mb-4 border-secondary-subtle"/>
                  <p class="m-0 text-secondary text-center">Already have an account? <Link to="/login" className="link-primary text-decoration-none">Sign in </Link></p>
                </div>
              </div>
              <div class="row text-center">
                <div class="col-12">
                  <p class="mt-5 mb-4">Or sign in with</p>
                  <div class="d-flex gap-3 flex-column flex-xl-row justify-content-center ">
                    <a href="#!" class="btn bsb-btn-xl btn-outline-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
                        <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                      </svg>
                      <span class="ms-2 fs-6">Google</span>
                    </a>
                    <a href="#!" class="btn bsb-btn-xl btn-outline-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                      </svg>
                      <span class="ms-2 fs-6">Facebook</span>
                    </a>
                    <a href="#!" class="btn bsb-btn-xl btn-outline-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                      </svg>
                      <span class="ms-2 fs-6 ">Twitter</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Registration
