import React from 'react'
import './Footer.css'
import {FaFacebook} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

function Footer() {
  return (
    <footer>
      <a href="#" className='footer__logo'>LOGO</a>

      <ul className='permalinks'>
        <li href='#'>Home</li>
        <li href='#about'>About</li>
        <li href='#experience'>Experience</li>
        <li href='#services'>Services</li>
        <li href='#portfolio'>Portfolio</li>
        <li href='#testimonials'>Testimonials</li>
        <li href='#contact'>Contact</li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><FaFacebook /></a>
        <a href="https://instagram.com"><FiInstagram /></a>
        <a href="https://twitter.com"><IoLogoTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; EGATOR Tutorials. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer