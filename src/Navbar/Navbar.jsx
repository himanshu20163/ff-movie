import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{
      height:"20vh",
      width:"100%",
      border:"2px solid red",
      position:"sticky",
      top:"0"
    }}>
      <div>Logo Name</div>
      <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/aboutus">about us</NavLink>
      <NavLink to="/Services">Services</NavLink>
      <NavLink to="/contactus">Contact Us</NavLink>
      </div>
      
    </div>
  )
}

export default Navbar