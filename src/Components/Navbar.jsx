// components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom'

const navbar = () => {
  return (
    <nav className="nav-style">
      <ul>
        {/* <NavLink to="/projects" activeClassName="selected" >Projects</NavLink> */}
        {/* <li><NavLink to="/projects" activeStyle={{fontWeight: 'bold', color: 'red' }}>Projects</NavLink></li> */}
        <li><Link to='/projects' style={{ textDecoration: 'none' }}>Projects</Link></li>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
      </ul>
    </nav>
  )
}

export default navbar;
