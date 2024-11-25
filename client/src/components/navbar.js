import React from 'react'
import "../styles/navbar.css"
const Navbar = () => {
  return (
    <div>
       <nav className="navbar">
      <div className="navbar-logo">
        <h1>MyWebsite</h1>
      </div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="/parkingspace">Parking Space</a></li>
        <li><a href="#services">Booking</a></li>
        <li><a href="/wallet">Wallet</a></li>
        <li><a href="#contact">Profile</a></li>
        <li><a href="#contact">Contact us </a></li>
        <li><a href="/login">Login</a></li>


      </ul>
    </nav>
      
    </div>
  )
}

export default Navbar