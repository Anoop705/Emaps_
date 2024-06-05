import React from 'react'
import './Navbar.css'
import ceson from '../../assets/final_ceson_logo.png' 

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='logo'><img src={ceson} alt="logo" /><p>CESON</p></div>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Services</a></li>
        </ul>
        <button className='signup'>Sign-up</button>
        
    </div>
  )
}
