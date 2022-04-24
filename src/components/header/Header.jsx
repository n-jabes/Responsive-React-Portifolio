import React from 'react'
import CTA from './CTA'
import './Header.css'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

function Header() {
  return (
    <header>
      <div className="container header__container">
      <h5>Hello I'm</h5>
      <h1>Nshuti Jabes</h1>
      <h5 className='light_text'>Fullstack developer</h5>
      <CTA />
      <HeaderSocials />

      <div className="me">
        <img src={ME} alt="me" />
      </div>

      <a href="#contact" className='scroll__down'>Scroll down</a>
    </div>
    </header>
  )
}

export default Header
