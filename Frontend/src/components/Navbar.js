import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">

        <NavLink className="navbar-brand" to="#">
          STOCK RECORDS
        </NavLink>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">

            <li className="nav-item">
              <NavLink className="nav-link" to="/allproductsrecord">AllProductList</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/Records">AddProduct</NavLink>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  )
}

export default Navbar
