import React from 'react'
import music from '../images/music.jpeg'
import dance from '../images/dance.jpg'
import hm from '../images/hm.jpeg'
import '../Components/Homepage.css'

function Homeimages() {
  return (
    <div className='homepage'>
    <img className='musictea' src={music} alt="music logo"/>
  <img  className="guy"src={hm} alt="hm"/>
  <img className='dance'src={dance} alt="dance"/>

 </div>
  )
}

export default Homeimages;