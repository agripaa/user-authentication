import React, {useState, useEffect} from 'react';
import { AiOutlineBars } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";
import { NavLink } from 'react-router-dom';
import AOS from 'aos';
import "./css/Navbar.css";


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: true
    })
  }, [])
  return (
    <nav className="container navbar">
      <div className='logo'>
            <p className="logo-text">
              Coffee <span>Shop</span>
            </p>
        </div>
        <menu>
          <ul className="nav-links" id={showMenu ? "nav-links-mobile" : "nav-links-mobile-hide"}>
                  <li><NavLink className='nav-link' aria-current='page' to='/'>Home</NavLink></li>
                  <li><NavLink className='nav-link' aria-current='page' to='/about'>About</NavLink></li>
                  <li><NavLink className='nav-link' aria-current='page' to='/product'>Product</NavLink></li>
                  <li><NavLink className='nav-link' aria-current='page' to='/contact'>Contact</NavLink></li>
            <li className="nav-btn">
              <NavLink className='btn btn-outline ms-auto px-4 rounded-pill nav-btn' aria-current='page' to='/login'><i className='fa fa-sign-in me-2'></i> Login</NavLink>
              <NavLink className='btn btn-outline ms-2 px-4 rounded-pill nav-btn' aria-current='page' to='/register'><i className='fa fa-user-plus me-2'></i> Register</NavLink>
            </li>
          </ul>
        </menu>
        <div className="menu-icons" onClick={toggleMenu}>
          {
            showMenu ? (<RiCloseLine color='#000' size={30}/>) : (<AiOutlineBars color='#000' size={27}/>)
          }
        </div>
    </nav>
  )
}


export default Navbar