import React, { useEffect, useState } from 'react';

// import components
import Logo from '../assets/img/logo4.png';
import Nav from '../components/Nav';
import NavMobile from '../components/NavMobile';
import Socials from './Socials';

const Header = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  return (
    <div className='flex justify-center'>

      <header
        className={`${bg ? 'bg-tertiary h-20' : 'h-24'
          } flex items-center fixed top-0 w-screen text-white z-10 transition-all duration-300`}
      >
        <div className='container mx-auto h-full flex items-center justify-between'>
          {/* logo */}
          <a href='/'>
            <img src={Logo} alt='' />
          </a>
          {/* nav */}
          <div className='hidden lg:block'>
            <Nav />
          </div>
          {/* Socials */}
          <div className='hidden lg:block'>
            <Socials />
          </div>
          {/* nav mobile*/}
          <div className='lg:hidden'>
            <NavMobile />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
