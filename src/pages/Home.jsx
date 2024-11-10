import React from 'react';
import { useState } from 'react';
import './Home.css';
import Messages from '../Messages';
import Gallery from '../Gallery';
import Navbar from '../Navbar.jsx';
import NavItem from '../NavItem.jsx';
import DropdownMenu from "../DropdownMenu.jsx";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const homeClick = () => {
    alert('Home Icon Clicked!');
  };

  const gearClick = () => {
    alert('Gear Icon Clicked!');
  };
  
  const loginClick = () => {
    alert('Plus Icon Clicked!');
  };


  // Need to add onClick to these images.
  return (
    <div className='main-layout'>
      <Navbar>
        <NavItem icon="‎ ‎ ‎ ‎ ‎ ‎ "/>
        <img src="https://cdn-icons-png.flaticon.com/128/1946/1946488.png" alt="Home Icon" className='navbar-images' onClick={homeClick} style={{top: '17px',
  right: '155.5px', cursor: 'pointer',}}/>
        <NavItem icon="‎ ‎ ‎ ‎ ‎ ‎ "/>
        <img src="https://cdn-icons-png.flaticon.com/128/2099/2099058.png" alt="Gear Icon" className='navbar-images' onClick={gearClick} style={{top: '17.5px',
  right: '107.5px', cursor: 'pointer'}}/>
        <NavItem icon="‎ ‎ ‎ ‎ ‎ ‎ "/>
        <img src="https://cdn-icons-png.flaticon.com/128/1828/1828445.png" alt="Login Icon" className='navbar-images' onClick={loginClick} style={{top: '17.5px',
  right: '59px', cursor: 'pointer'}}/>
        <img src="https://cdn-icons-png.flaticon.com/128/7185/7185284.png" alt="Dropdown Icon" className='navbar-images' onClick={homeClick} style={{top: '17px',
  right: '11px', cursor: 'pointer', transform: 'rotate(180deg)'}}/>
        <NavItem icon="‎ ‎ ‎ ‎ ‎ ‎ ">
          

          <DropdownMenu />
        </NavItem>
      </Navbar>
      <div className={`main-messages ${isOpen ? 'open' : ''}`}>
        <div className='message-header'> 
          Messages 
        </div>
        <Messages />
      </div>

      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="burger"></div>
        <div className="burger"></div>
        <div className="burger"></div>
      </div>

      <div className='line'></div>
      <Gallery />
      
    </div>
  );
};

export default HomePage;
