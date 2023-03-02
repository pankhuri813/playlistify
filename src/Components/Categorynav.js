import React from 'react'
import mylogo from '../images/mylogo.png'

function Categorynav() {
  return (
    <nav>
    <img className="logo" src={mylogo} alt="mylogo"/>
    <div id='flex'>
    <p>Logo</p>
    <p> About us </p>
    <p> Home</p>
    </div>
   </nav>
  )
}

export default Categorynav;