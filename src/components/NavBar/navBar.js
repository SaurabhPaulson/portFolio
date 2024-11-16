import React, { useState } from 'react'
import {Link} from 'react-scroll'
import contact from '../../assets/contact.png'
import logo from '../../assets/logo.png'
import './navBar.css';
import menu from '../../assets/menu.png'

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <nav className="navbar">
        <img src={logo} alt="logo" className='logo' />
        <div className="desktopMenu">
            <Link activeClass='active' to='home' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
            <Link activeClass='active' to='about' spy={true} smooth={true} offset={-60} duration={500} className="desktopMenuListItem">About Me</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Skills</Link>
            <Link activeClass='active' to='experience' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Experience</Link>
            <Link activeClass='active' to='home' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Resume</Link>

        </div>
        <button className="desktopMenuBtn" onClick={()=> {
          document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
        }}>
            <img src = {contact} alt="contact" className="desktopMenuImg" />Contact Me
        </button>

        <img src={menu} alt="Menu" className='mobMenu' onClick={() => setShowMenu(!showMenu)} />
        <div className="navMenu" style={{display : showMenu ? 'flex': 'none'}} >
            <Link activeClass='active' to='home' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Home</Link>
            <Link activeClass='active' to='about' spy={true} smooth={true} offset={-60} duration={500} className="listItem" onClick={() => setShowMenu(false)}>About Me</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Skills</Link>
            <Link activeClass='active' to='experience' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Experience</Link>
            <Link activeClass='active' to='home' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Resume</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Contact</Link>
        </div>

    </nav>
    
  )
}

export default NavBar