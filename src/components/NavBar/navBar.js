import React from 'react'
import {Link} from 'react-scroll'
import contact from '../../assets/contact.png'
import logo from '../../assets/logo.png'
import './navBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
        <img src={logo} alt="logo" className='logo' />
        <div className="desktopMenu">
            <Link activeClass='active' to='home' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
            <Link activeClass='active' to='about' spy={true} smooth={true} offset={-60} duration={500} className="desktopMenuListItem">About Me</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Skills</Link>
            <Link activeClass='active' to='home' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Experience</Link>
            <Link activeClass='active' to='home' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Resume</Link>

        </div>
        <button className="desktopMenuBtn" onClick={()=> {
          document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
        }}>
            <img src = {contact} alt="contact" className="desktopMenuImg" />Contact Me
        </button>

    </nav>
    
  )
}

export default NavBar