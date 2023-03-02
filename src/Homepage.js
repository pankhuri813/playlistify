import React from 'react'
import Homenav from './Components/Homenav'
import Homeimages from './Components/Homeimages'
import { Link } from 'react-router-dom'
// import index from './index'


function Homepage() {
  return (
    <div>
      
      <Homenav/>
  <Homeimages/>
  <Link to="/homemain"><button id='black'> Join now</button></Link>


    </div>
  )
}

export default Homepage