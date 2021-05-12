import React, {  useState, useEffect } from 'react';
import logo from '../../assets/images/logo/logo.svg'
import './style.css'
//import { Link } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link';
import {  Link as Linke} from 'react-router-dom';
//import Dropdown from '../Dropdown'
import { Button } from '../Button/index';


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth >= 960) {
      setButton(true);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
<>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src={logo} alt="logo" className="navbar-img"/>
            
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          
          
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links link-hover' onClick={closeMobileMenu}>
                <span>
                Home
                </span>  
              </Link>
            </li>
            <li className='nav-item'>
              <Linke
                to='https://web.skype.com/'
                className='nav-links link-hover'
                onClick={closeMobileMenu}
              >
                <span>
                     Quem Somos
                </span>
              </Linke>
            </li>
            <li className='nav-item'>
              <Link
                to='/#services'
                className='nav-links link-hover'
                onClick={closeMobileMenu}
              >
                <span>  

                Serviços
                </span>
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/#etapas'
                className='nav-links link-hover'
                onClick={closeMobileMenu}
              >
                 <span> 

                Etapas
                 </span>
              </Link>
            </li>
    
            <li className='nav-item'>
              <Link
              
                to='/#portifolio'
                className='nav-links link-hover'
                onClick={closeMobileMenu}
              >
                 <span> 
                Portifólio
                 </span>
              </Link>
            </li>


            <li className='nav-item'>
              <Link
                to='/#orcamento'
                className='nav-links link-hover'
                onClick={closeMobileMenu}
              >
                <span> 

                Orçamento
                </span>
              </Link>
            </li>

            {/*<li className='nav-item'>
              <Link
                to='/#directions'
                className='nav-links link-hover'
                onClick={closeMobileMenu}
              >
                 <span> 
                    Localização
                 </span>
              </Link>
            </li>
        */}

            <li>
              
            <Link to='/#blog' className='nav-links'
                onClick={closeMobileMenu} > 
               {button && <Button buttonStyle='btn--outline'>
                    Instagram
                 </Button> } 
               </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

