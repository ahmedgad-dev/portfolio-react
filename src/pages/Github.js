import React from 'react';
import styled from 'styled-components';
import { GithubContext } from '../context/context';
import { Pie3D, Column3D, Bar3D, Doughnut2D } from '../components/Charts/';
import { ReactComponent as GithubLogo } from '../assets/svg/github.svg';
import Repos from '../components/repos/Repos'


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
    (<section>
      { githubUser && <h1 className='text-2xl sm:text-4xl md:text-6xl'>{githubUser.login}</h1>}
       <div className="page-intro flex flex-row align-center mt-16 mb-6 justify-center align-center">
         <h2 className='text-sm sm:text-xl lg:text-2xl italic justify-center w-2/3 md:w-1/2 md:justify-start'>Below are Statistics made by data coming from the github API</h2>
         <GithubLogo/>
       </div>
      <Wrapper className='items-center justify-center'>     
        <Pie3D data={mostUsed} />
        <Column3D data= {stars}/>   
        <Bar3D data={forks} />
        <Doughnut2D data={mostUsed}/>      
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

  div {
    width: 100% !important;
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
