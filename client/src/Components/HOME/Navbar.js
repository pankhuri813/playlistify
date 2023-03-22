import React from 'react'
import "./Navbar.css"

function Navbar() {
  return (
    <div className='navbar'>
      <img src={'./logo/Logo.svg'} alt="logo" />
      <div>
        <p>Home</p>
        <p>Explore</p>
        <p>About</p>
        <img src={'./icons/log-in.svg'} alt="login" />
      </div>
    </div>
  )
}

export default Navbar