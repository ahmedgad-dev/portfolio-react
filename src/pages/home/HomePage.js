import React from 'react';
import Header from '../../components/header/Header';
import Projects from '../../components/projects/Projects'
import Features from '../../components/features/Features';
import Repos from '../../components/repos/Repos';

function HomePage() {
  return (
    <div>
      <Header /> 
      <Projects />
      <Features />
      <Repos />
    </div>
  )
}

export default HomePage