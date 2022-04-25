import React, {useState, useEffect} from 'react'
import { AiOutlineBars } from "react-icons/ai"
import { RiCloseLine } from "react-icons/ri"
import AOS from 'aos'
import "./css/Navbar.css"


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
              Coffe <span>Shop</span>
            </p>
        </div>
        <menu>
          <ul className="nav-links" id={showMenu ? "nav-links-mobile" : "nav-links-mobile-hide"}>
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/product">Product</a></li>
            <li><a href="/contact">Contact</a></li>
            <li className="nav-btn">
              <button className='btn btn-outline ms-auto px-4 rounded-pill'><i className='fa fa-sign-in me-2'></i> Login</button>
              <button className='btn btn-outline ms-2 px-4 rounded-pill'><i className='fa fa-user-plus me-2'></i> Login</button>
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