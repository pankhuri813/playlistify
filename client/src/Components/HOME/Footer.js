import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div>
        <div className="socials">
        <div>
          <img src={'./icons/twitter.svg'} alt="twitter" />
          <img src={'./icons/instagram.svg'} alt="insta" />
          <img src={'./icons/linkedin.svg'} alt="linkedin" />
        </div>
        <img src={'./logo/logo-small.svg'} alt="smalllogo" />
      </div>
    </div>
  )
}

export default Footer