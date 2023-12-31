import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faBars,faTimes } from '@fortawesome/free-solid-svg-icons';
import { Button } from './Button';
import Logo from "/images/LogoMetaTrip.png"
import './Navbar.css';

  
function Navbar() {
  const [click,setClick] = useState(false);
  const [button,setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false)
    
    }
    else{
      setButton(true)
    }
  };

  useEffect(() => {
    showButton();

  },[]);

  

  window.addEventListener('resize',showButton);



    return (
      <>
   <nav className='navbar'>
      <div className="navbar-container">
        <div className="left">
          <Link to = "/" className="navbar-logo" onClick={closeMobileMenu}>
          {/* <img className="Logo" src={Logo} /> */}
          <p>METATRIP</p>
          </Link>
          </div>
             


          
          <div className="menu-icon" onClick={handleClick}>
          <FontAwesomeIcon icon={click ? faTimes : faBars} style={{ color: click ? '#fff' : '#fff' }} />

          </div> 

        <ul className={click ? 'nav-menu active' : 'nav-menu'} > 

        <li className='nav-item'>
          <Link to="/" className='nav-links' onClick={closeMobileMenu}>
            Home
            </Link>
             </li>

        <li className='nav-item'>
          <Link to="/services" className='nav-links' onClick={closeMobileMenu}>
            Trips
            </Link>
        </li>

        <li className='nav-item'>
          <Link to="/products" className='nav-links' onClick={closeMobileMenu}>
            About Us
            </Link>
        </li>

        <li className='nav-item'>
          <Link to="/sign-up" className='nav-links-mobile' onClick={closeMobileMenu}>
            Sign-Up
            </Link>
        </li>

        </ul>
        {button && <Button buttonStyle= 'btn--medium btnsign'>Sign In </Button>}

        </div>
  </nav>


    </>
  )
}

export default Navbar