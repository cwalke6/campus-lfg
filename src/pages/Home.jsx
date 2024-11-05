import React from 'react';
import { useState } from 'react';
import { ReactComponent as HomeIcon } from '../icons/home.svg';
import './Home.css';
import Messages from '../Messages';
import Gallery from '../Gallery';
import Navbar from '../Navbar.jsx';
import NavItem from '../NavItem.jsx';

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='main-layout'>
      <HomeIcon />
      <Navbar>
        <NavItem icon="😂"/>
        <NavItem icon="😂"/>
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
