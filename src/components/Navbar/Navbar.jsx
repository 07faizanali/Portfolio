import React, { useState } from 'react'
import './Navbar.css'
import MobileNav from './MobileNav/MobileNav';
import HomeIcon from '@mui/icons-material/Home';



const Navbar = () => {

  const [openMenu, setOpenMenu]= useState(false);

  const toggleMenu = () =>{
    setOpenMenu(!openMenu);
  };
  
  return (
    <>
    <MobileNav isOpen={openMenu} toggleMenu={toggleMenu}/>
    <nav className='nav-wrapper'>
      <div className='nav-content'>
        <img className='logo' src='./photos/resume.png' alt='' />
        <h2>Portfolio</h2>
        <ul>
        <HomeIcon/><a href='/' className='menu-item'>Home</a>
         <li>
            <a href='#skills' className='menu-item'>Skills</a>
          </li>
          <li>
            <a href='#projects' className='menu-item'>Projects</a>
          </li>
          <li>
            <a href='#experience' className='menu-item'>Work Experience </a>
          </li>
          <li>
            <a href='#aboutme' className='menu-item'>AboutMe</a>
          </li>
          <a href='#contact' className='contact-btn'>
            Hire Me
          </a>
        </ul>
  
        <button className="menu-btn" onClick={toggleMenu}>
          <span 
          class={"material-symbols-outlined"}
          style={{ fontSize: "1.8rem" }}
          >
            {openMenu ? "close" : "menu"}
          </span>
        </button>
      </div>
    </nav>
    </>
  );
};

export default Navbar