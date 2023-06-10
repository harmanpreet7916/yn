import React from 'react';
import { Link } from 'react-scroll';

// import woman image
import YogaSidePose from '../assets/img/side 2.jpg';

const Hero = () => {
  return (
    <section
      id='home'
      className='lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'
    >
      <div className='container mx-auto h-full'>
        <div className='flex items-center h-full pt-8'>
          <div className='flex-1 flex flex-col items-center lg:items-start'>
            <p className='text-lg text-accent text-md mb-[22px]'>
              {/* Hey, we are a team 👋 */}
            </p>
            <h1 className='text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]'>
              Yoga Poses detection &<br /> Classification.
            </h1>
            <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left'>
            As a part of our project, we have developed YogaNet web application that can accurately detect which yoga pose you are doing and with how much accuracy. 
            </p>
            <button  className='btn btn-md bg-accent hover:bg-secondary-hover md:btn-lg transition-all' >
            <Link
                to='uploadImage'
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className='transition-all text-white duration-300'
              >
              Classify Poses
              </Link>
            </button>
          </div>
          <div className='hidden lg:flex flex-1 justify-end items-end h-full mt-10'>
            <img src={YogaSidePose} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
