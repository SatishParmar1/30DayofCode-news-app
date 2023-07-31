import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class Navbar extends Component {
  static propTypes = {}

  render() {
    return (
        <>
      <div className="container-lg" >DAY Nine(9)</div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm  mb-5 bg-white"  >
      <div className="container-fluid">
    <a className="navbar-brand" href="/">30DaysofCode</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">About</a>
        </li>
      
      </ul>
     
    </div>
  </div>

    
    </nav>
    </>
    )
  }
}

export default Navbar