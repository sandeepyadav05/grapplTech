import React from 'react'
import '../../styles/sideNavbar.scss'
import menu from '../../assets/Nav/menu-white.png'
import siteLogo from '../../assets/Nav/site-logo-white.png'
import sitelogo2 from '../../assets/Nav/site-logo-white-2.png'

function SideNavbar() {
  return (
    <div>
       <header className="header__area">
    <div className="header__inner">
      <div className="header__logo">
        <a href="index.html">
          <img className="logo-primary" src={siteLogo} alt="Site Logo"/>
          <img className="logo-secondary" src={sitelogo2} alt="Moibile Logo"/>
        </a>
      </div>
      <div className="header__nav-icon">
        <button id="open_offcanvas"><img src={menu} alt="Menubar Icon"/></button>
      </div>
      <div className="header__support">
        <p>Support center <a href="tel:+9587325902">+9 587 325 902</a></p>
      </div>
    </div>
  </header>
    </div>
  )
}

export default SideNavbar