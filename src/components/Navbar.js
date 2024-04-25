import React, { useState } from 'react'
import "./Navbar.css"
import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi"

const Navbar = () => {

  const [showMediaIcons, setShowMediaIcons] = useState(false)

  return (
    <>
      <nav className='main-nav'>
        <div className='logo'>
          <h2>
            <span>H</span>lping
            <span>A</span>pp
          </h2>
        </div>
        <div className={showMediaIcons ? 'menu-link mobile-menu-link' : 'menu-link'}>
          <ul>
            <li>
              <a href='#'>Home</a>
            </li><li>
              <a href='#'>About</a>
            </li><li>
              <a href='#'>Services</a>
            </li><li>
              <a href='#'>Contact</a>
            </li>
          </ul>
        </div>
        <div className='social-media'>
          <ul className='social-media-desktop'>
            <li>
              <a href='https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA' className='facebook' target='_xyz'><FaFacebookSquare /></a>
            </li><li>
              <a href='https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA' className='instagarm' target='_xyz'><FaInstagramSquare /></a>
            </li><li>
              <a href='https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA' className='youtube' target='_xyz'><FaYoutubeSquare /></a>
            </li>
          </ul>
          <div className='hamburger-menu'>
            <a href='#' onClick={() => setShowMediaIcons(!showMediaIcons)}><GiHamburgerMenu /></a>
          </div>
        </div>
      </nav>
      <section className='hero-section'>
        <p>Welcome to</p>
        <h1>Helping App</h1>
      </section>
    </>
  )
}

export default Navbar