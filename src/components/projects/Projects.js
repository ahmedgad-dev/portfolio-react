import React, {useState} from 'react'
import items from '../../projects.data'
import ProjectCategories from '../projects-categories/ProjectCategories'
import Project from '../project/Project'
import './projects.scss'

//the Set method neglects the duplicate values
const allCategories = ['All', ...new Set(items.map(item => item.category)),]

function Projects() {
  const [projects, setprojects] = useState(items)
  const [categories, setCategories] = useState(allCategories)
 

  const filterItems = (category) => {  
    if(category === 'All'){
      setprojects(items)
      return //the return to make the function stop excuting once all is matched 
    }

    let newItems = items.filter(project => {
      return project.category === category
    })
    setprojects(newItems)
  }

  
    return(
       <section className="menu section" id='projects'>
        <div className='mb-10 lg:mb-16'>
          <h2 className='heading-secondary uppercase'>My Projects</h2>
          <div className="underline"></div>
        </div>
        <ProjectCategories categories={categories} filterItems={filterItems} />
        <div className="section-center">
          {projects.map((item) => (
             <Project key={item.id} projectItem={item} />
          ))}
        </div>     
      </section>

    );
  }


export default Projects