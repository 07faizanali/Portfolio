import React from 'react'
import "./MobileNav.css"

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <>
    <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
    >
        <div className='mobile-menu-container'>
        <img className='logo' src='./photos/resume.png' alt='' />
        <ul>
          <li>
            <a className='menu-item'>Home</a>
          </li>
          <li>
            <a href='#aboutme' className='menu-item'>About Me</a>
          </li>
          
          <li>
            <a href='#skills' className='menu-item'>Skills</a>
          </li>
          <li>
            <a href='#projects' className='menu-item'>Projects</a>
          </li>
          
          <li>
            <a href='#experience' className='menu-item'>Work Experience </a>
          </li>
        
          <a href='#contact' className='contact-btn2' >
            Hire Me
            </a>
        </ul>
        </div>
    </div>
    </>
  )
}

export default MobileNav