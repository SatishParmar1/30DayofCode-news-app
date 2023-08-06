//import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Logo from "./logo.png";
export class Navbar extends Component {
  

  render() {
    return (
        <>
      
   <div className=''>
   <nav className="navbar navbar-light fixed-top shadow rounded">
  <div className="container-fluid">
     <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <Link className="navbar-brand " id="logo" to="#"> <img src={Logo} alt="" width="30" height="30" className="d-inline-block align-text-top"/> 30DAYSOFCODE</Link>
   
    <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
      <h5 className="offcanvas-title" id="offcanvasNavbarLabel"><img src={Logo} alt="" width="30" height="30" className="d-inline-block align-text-top"/>NewsFlash</h5>
        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <Link className="nav-link" to="general">All News</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="entertainment">Entertainment</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="health">Health</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="science">Science</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="sports">Sports</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="technology">Technology</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="business">Business</Link>              
          </li>
          
        </ul>
     
      </div>
    </div>
  </div>
</nav>
    </div>
    </>
    )
  }
}

export default Navbar