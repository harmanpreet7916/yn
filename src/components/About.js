import React from 'react';
import { Link } from 'react-scroll';

// import img
import Image from '../assets/img/yoga bg1.png';
 
const About = () => {
  return (
    <section className='section bg-secondary' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-24'>
          <img
            className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl'
            src={Image}
            alt=''
          />
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <div className='flex flex-col'>
              <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
                Mobile App
              </h2>
              <p className='mb-4 text-accent'>
                Detect and classify yoga poses with app
              </p>
              <hr className='mb-8 opacity-5' />
              <p className='mb-8'>
              This Web application is also available as Mobila app, to detect yoga poses from your android or iOS device then please download the YogaNet mobile app from the given link. <br />
                <br />
                Powered by gradio api and optimized for resource constrained devices this mobile app is lightening quick and also highly accurate.
              </p>
            </div>
            <a target="blank" href="https://drive.google.com/drive/folders/1GGAQnT_dXYNWIn0DFVtx755lK0fFklLS">
            <button className='btn btn-md bg-accent hover:bg-secondary-hover transition-all'>
           
              Download app
             
            </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
