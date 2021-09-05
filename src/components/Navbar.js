import React from 'react'
import { Link } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css'


function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
  <Link className="navbar-brand" href="#">RealState</Link>
  
  <div className="collapse navbar-collapse" id="navbarNav" >
    <ul className="navbar-nav ml-auto" >
      <li className="nav-item active">
        <Link className="nav-link" href="#">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="#">Features</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="#">Pricing</Link>
      </li>
    </ul>
  </div>
</nav>
    )
}

export default Navbar




