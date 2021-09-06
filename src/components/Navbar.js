import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import '../App.css'



function Navbar() {
  
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
          <button className="navbar-toggler bg-light" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" >
            </span>
          </button>
          <Link className="navbar-brand text-white" to="/home">
            <img src="https://www.graphicsprings.com/filestorage/stencils/e29d1768ea6d04e57a4e37c1f90505e3.png?width=500&height=500" alt="" 
            style={{height:"4vw", width:"10vh"}}>
            </img>Beach Resort 
          </Link>
  
        <div className="collapse navbar-collapse" id="navbarNav" >
    
          <ul className="navbar-nav ml-auto" >
            <li className="nav-item active">
              <Link className="nav-link text-white" to="/Home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/About">About</Link>
            </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/Contact">Contact</Link>
          </li>
          </ul>
        </div>
        </nav>
    )
}

export default Navbar




