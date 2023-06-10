import React from 'react';

// import components
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import BackTopBtn from './components/BackTopBtn';
import { ImageUpload } from "./home.js";

const App = () => {
  return (
    <div className='bg-white relative'>
      <Header />
      <Hero />
      <About />
      <ImageUpload />
      <Services />
      <Testimonials />
      <Footer />
      <BackTopBtn />
    </div>
  );
};

export default App;
