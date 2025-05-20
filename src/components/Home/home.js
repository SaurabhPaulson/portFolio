import React from 'react'
import './home.css'
import saurabh from '../../assets/saurabh.png'
import hireme from '../../assets/hireme.png'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <section id="home">
        <div className="homeContent">
            <span className="hello">Hello,</span>
            <span className="homeText">I’m <span className="homeName">Saurabh Paulson <br /> </span>Software Engineer</span>
            <p className="homePara"> I am passionate about building intuitive, efficient, and visually stunning user interfaces <br />and robust backend systems that power seamless digital experiences.</p>
            <Link><button className="btn"><img src={hireme} alt="Hire Me" className='hireme' />Hire Me</button></Link>
        </div>
        <img src={saurabh} alt="Profile" className="bg" />
    </section>
   
  )
}

export default Home