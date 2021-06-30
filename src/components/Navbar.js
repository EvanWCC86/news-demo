import React from 'react'
import {navbarData} from '../data/navbarData'
import {Link} from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="nav_container container">
            <ul>
                {navbarData.map((item,index) => (
                    <li key={index}>
                        <Link to={item.url}>{item.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
