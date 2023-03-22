import React from 'react'
import Navbar from '../HOME/Navbar.js'
import './Categories.css'
import Footer from '../HOME/Footer.js'
function Categories() {
  return (
    <div>
        <Navbar/>
        <div className='searchBar'>
          <h1>Categories</h1>
          {/* <div>
            <input type='text' placeholder='search' />
            <button>
              <img src={'/icons/search.svg'} alt='searchbutton' />
            </button>
          </div> */}
        </div>
        <div className='categories'>
          <div className='first-row'>
            <div>
            <img src={'./images/Kathak.jpeg'} alt='kathak' />
            <p>KATHAK</p>
            </div>
            <div>
              <img src={'./images/hipHop.jpeg'} alt='hipHop' />
              <p>HIP-HOP</p>
            </div>
            <div>
              <img src={'./images/tapDance.jpeg'} alt='hipHop' />
              <p>TAP-DANCE</p>
            </div>
          </div>
          <div className='second-row'>
            <div>
            <img src={'./images/contemporary.jpg'} alt='contemporary' />
            <p>Contemporary</p>
            </div>
            <div>
            <img src={'./images/jazz.jpeg'} alt='jazz' />
            <p>JAZZ</p>
            </div>
          </div>
          <Footer/>
        </div>
    </div>
  )
}

export default Categories