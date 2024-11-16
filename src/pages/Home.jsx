import { useState } from 'react';
import './Home.css';
import Messages from './Messages';
import Gallery from '../Gallery';
import 'bootstrap/dist/css/bootstrap.min.css';


const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='main-layout'>
      {/*Should incorporate into the navbar when that gets created*/}
      <img className="logo" src={'../../images/campusLFG-logo.jpg'} alt="CampusLFG Logo"/>
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
