import './navbar.css'
import logo from '../img/logo.svg'
import chevron_up from '../icons/chevron-down.svg'
import light  from '../images/sun.svg'
import dark from '../images/dark-mode-6682.svg'
import { useState } from 'react'


import { Link, NavLink } from 'react-router-dom'
// import { Fragment } from 'react'




export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }
  return (

    <div className="tweeper">
      <div className='navbar-first'>
        <div className="container">
          <div className="navbar">
            <div className="logo">
              <img src={logo} alt="Logo" />
            </div>
            <ul className='navbar-item'>
              <NavLink to="/Trading" className='navbar-item_info'>
                Trading<img src={chevron_up} alt="Chevron" />
              </NavLink>
              <NavLink to="/Platform" className='navbar-item_info'>
                Platform<img src={chevron_up} alt="Chevron" />
              </NavLink>
              <NavLink to="/Tools" className='navbar-item_info'>
                Tools & Resources<img src={chevron_up} alt="Chevron" />
              </NavLink>
              <NavLink to="/Account_types" className='navbar-item_info'>
                Account types<img src={chevron_up} alt="Chevron" />
              </NavLink>
              <li className='navbar-dark'>
                <img src={darkMode ? dark : light} onClick={toggleDarkMode} alt=""/>
              </li>
            </ul>
            <NavLink to="/Login" id='button-link' href="#">Log in</NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}