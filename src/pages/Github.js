import React from 'react';
import styled from 'styled-components';
import { GithubContext } from '../context/context';
import { Pie3D, Column3D, Bar3D, Doughnut2D } from '../components/Charts/';
import { ReactComponent as GithubLogo } from '../assets/svg/github.svg';
import {VscGithub} from 'react-icons/vsc'
import Repos from '../components/repos/Repos'
import Logo from  '../components/logo/Logo'


const Github = () => {
  const { repos, githubUser } = React.useContext(GithubContext);
  console.log(repos)

   const languages = repos.reduce((total, item ) => {
    const {language, stargazers_count} = item
    if(!language) return total;

    if(!total[language]){ //if the property doesnt exist on the item
         total[language] = {label:language, value:1, stars: stargazers_count}  //for the piechart stars property
    } else {
      total[language] = {...total[language], value: total[language].value + 1, stars: total[language].stars + stargazers_count}
    }

    return total
  }, {})

   // for the pie chart
  const mostUsed = Object.values(languages).sort((a,b) => {
    return b.value - a.value  //This return the sorted values from greatest to smallest to alwasy add highest language first
  }).slice(0,5)

  // most stars per language
  const mostPopualr = Object.values(languages).sort((a,b) => {
   return b.stars - a.stars
  }).map(item => {
    return {...item, value: item.stars}
  })

   // stars , forks
   let {stars , forks} = repos.reduce((total, item) => {
      const {stargazers_count, name, forks } = item
      total.stars[stargazers_count] = {label:name, value: stargazers_count}
      total.forks[forks] = {label: name, value: forks}
      return total
     }, {stars: {} , forks: {}}
   )

   stars = Object.values(stars).slice(-5).reverse() //-5 gives the last 5 items in the array and reveresed to display the biggest ones first
   forks = Object.values(forks).slice(-5).reverse()
  

  return(
    (<section className=''>
      { githubUser && <h3 className='text-2xl sm:text-3xl md:text-5xl mb-0 md:mb-3 2xl:mb-8'>{githubUser.login}</h3>}
        <div className='w-full flex justify-center'><Logo/></div>

          {/* large screen stats*/}
         <div className="stats shadow mt-8 hidden sm:inline-flex md:m-8 lg:m-16">
           <div className="stat">
             <div className="stat-figure text-primary">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
             </div>
             <div className="stat-title">Total Repos</div>
             <div className="stat-value text-primary">26</div>
             <div className="stat-desc">Different Types Of Projects</div>
           </div>
  
         <div className="stat">
           <div className="stat-figure text-secondary">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
           </div>
           <div className="stat-title">Codes Written</div>
           <div className="stat-value text-secondary">1M+</div>
           <div className="stat-desc">21% more than last year</div>
         </div>
  
        <div className="stat">
          <div className="stat-value">86%</div>
          <div className="stat-title">Tasks done</div>
          <div className="stat-desc text-secondary capitalize">requested tasks from clients</div>
        </div>
     </div>
     {/* large screen stats*/}

{/* Small screen stats*/}
 <div className="stats stats-vertical shadow sm:hidden mt-12 mb-12">  
  <div className="stat">
    <div className="stat-figure text-primary">
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
    </div>
    <div className="stat-title">Total Repos</div>
    <div className="stat-value">26</div>
    <div className="stat-desc">Different Types Of Projects</div>
  </div>
  
  <div className="stat">
    <div className="stat-title">86%</div>
    <div className="stat-value">Tasks done</div>
    <div className="stat-desc text-secondary">requested tasks from clients</div>
  </div>
  
  <div className="stat">
     <div className="stat-figure text-secondary">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
     </div>
    <div className="stat-title">1M+</div>
    <div className="stat-value">Codes Written</div>
    <div className="stat-desc ">21% more than last year</div>
  </div>
</div>
{/* Small screen stats*/}


       <div className="page-intro flex flex-row align-center mt-6 md:mt-16 mb-6 justify-center align-center">
         <h2 className='text-sm sm:text-xl lg:text-2xl italic justify-center w-2/3 md:w-1/2 md:justify-start'>Below are Statistics made by data coming from the github API</h2>
         <GithubLogo/>
       </div>
      <Wrapper className='items-center justify-around section-center fusioncharts-container'>     
        <Pie3D data={mostUsed} className='chart'/>
        <Column3D data= {stars} className='chart'/>   
        <Bar3D data={forks} className='chart'/>
        <Doughnut2D data={mostUsed} className='chart'/>      
      </Wrapper>
      <Repos githubPage />
    </section>)
)};

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  .fusioncharts-container {
    width: 100% !important;
  }

  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;

export default Github;
