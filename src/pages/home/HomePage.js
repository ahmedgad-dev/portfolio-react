import React from 'react';
import Header from '../../components/header/Header';
import Projects from '../../components/projects/Projects'
import Features from '../../components/features/Features';
import Repos from '../../components/repos/Repos';
import About from '../../components/about/About';
import Footer from '../../components/footer/Footer';

function HomePage() {
  return (
    <div>
      <Header /> 
      <Projects />
      <Features />
      <Repos />
      <About/>
      <Footer/>
    </div>
  )
}

export default HomePage