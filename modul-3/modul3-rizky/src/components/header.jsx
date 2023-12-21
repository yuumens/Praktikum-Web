import React from 'react'
import Navbar from './navbar'
import { NavLink, useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate();
  return (
    <div>
        <Navbar/>
        <button type="button" onClick={() => navigate('/')}>Home</button>
        <NavLink to={'/about'}>
        <button type="button">About</button>
        </NavLink>
        <NavLink to={'/contact'}>
        <button type="button">Contact</button>
        </NavLink>
    </div>
  )
}

export default Header