import React from 'react';
import AdminNavbar from '../NavbarComponent/AdminNavbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const AdminHomePage = () => {
  return (
    <div>
      
      <div className="container" style={{ marginBottom: '100px' }}>
        <p className="text-center fs-4 mt-2">Admin Dashboard</p>
        <div className="row p-5">
          <div className="col-md-4">
            <Link to ="/admin/addProduct" className="text-decoration-none">
              <div className="card">
                <div className="card-body text-center">
                  <FontAwesomeIcon icon={faPlus} size="2x" /><br />
                  <p className="fs-5">Add Product</p>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-md-4">
            <Link to="/admin/addCategory" className="text-decoration-none">
              <div className="card">
                <div className="card-body text-center">
                  <FontAwesomeIcon icon={faPlus} size="2x" /><br />
                  <p className="fs-5">Add Category</p>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-md-4">
            <a href="/admin/viewProducts" className="text-decoration-none">
              <div className="card">
                <div className="card-body text-center">
                  <FontAwesomeIcon icon={faEye} size="2x" /><br />
                  <p className="fs-5">View Product</p>
                </div>
              </div>
            </a>
          </div>

          <div className="col-md-4 mt-4">
            <a href="#" className="text-decoration-none">
              <div className="card">
                <div className="card-body text-center">
                  <FontAwesomeIcon icon={faTruckFast} size="2x" /><br />
                  <p className="fs-5">Orders</p>
                </div>
              </div>
            </a>
          </div>

          <div className="col-md-4 mt-4">
            <a href="#" className="text-decoration-none">
              <div className="card">
                <div className="card-body text-center">
                  <FontAwesomeIcon icon={faUser} size="2x" /><br />
                  <p className="fs-5">Users</p>
                </div>
              </div>
            </a>
          </div>

          <div className="col-md-4 mt-4">
            <a href="#" className="text-decoration-none">
              <div className="card">
                <div className="card-body text-center">
                  <FontAwesomeIcon icon={faPlus} size="2x" /><br />
                  <p className="fs-5">Add Admin</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHomePage;
