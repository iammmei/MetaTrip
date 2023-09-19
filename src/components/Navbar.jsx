import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faBars } from '@fortawesome/free-solid-svg-icons';


  
function Navbar() {
  return (
      <>
   <nav className='navbar'>
      <div className="navbar-container">
          <Link to = "/" className="navbar-logo">
              TRAVEL 
  <FontAwesomeIcon icon={faBars} />

          </Link>
          <div className="menu-icon">

          </div>

      </div>
  </nav>


    </>
  )
}

export default Navbar