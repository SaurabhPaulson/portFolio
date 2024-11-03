import React from 'react'
import './footer.css'

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">Copyright &#169; {currentYear} Saurabh Paulson. All rights reserved.</footer>
  )
}

export default Footer