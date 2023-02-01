import React from 'react'
import './Navbar.css'
import {gericht} from '../../constants/images.js'
const Navbar = () => {
  return (
   <nav className='app__navbar'>
    <div className="app__navbar-logo">
      <img src={gericht} alt='app__navbar-logo'/>
    </div>
    <ul className='app__navbar-links'>
        <li className="p__opensans"><a href="#home">Home</a></li>
        <li className="p__opensans"><a href="#about">About</a></li>
        <li className="p__opensans"><a href="#menu">Menu</a></li>
        <li className="p__opensans"><a href="#awards">Awards</a></li>
        <li className="p__opensans"><a href="#contact">Contact</a></li>
    </ul>
    <div className='app__navbar-login'>
      <a href="#login" className="p__opensans">Log In / Registration</a>
      <div/>
      <a href="/" className="p__opensans">Book Table</a>
    </div>
    
   </nav>
  )
}

export default Navbar