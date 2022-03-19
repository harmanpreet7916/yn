import React from 'react';

// import services data
import { services } from '../data';

const Services = () => {
  return (
    <section id='services' className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title'>What I do for clients</h2>
          <p className='subtitle'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga veniam
            labore nisium illum cupiditate reiciendis a numquam
          </p>
        </div>
        <div className='grid lg:grid-cols-4 gap-8'>
          {services.map((service, index) => {
            const { icon, name, description } = service;
            return (
              <div className='bg-gray-50 p-6' key={index}>
                <div className='bg-primary w-12 h-12 flex justify-center items-center mb-24'>
                  <img className='h-6' src={icon} alt='' />
                </div>
                <h4 className='text-xl font-medium mb-2'>{name}</h4>
                <p>{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
