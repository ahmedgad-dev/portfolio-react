import React from 'react'
import './repo.scss'
import gitbg from '../../assets/images/what-is-github-1-1.png'

const Repo = ({repo}) => {
  const {name, id, clone_url} = repo
  var nameFormat = name.toUpperCase().split('-')
  return (
   <div className="repo" key={id}>
      <h2 className="card-title title">{nameFormat.length > 2 ? nameFormat.slice(0,2).join('-') : name.toUpperCase()}</h2>
      <img src={gitbg} alt="github"/>
      <div className="overlay">    
        <button className="btn btn-info btn-outline btn-sm">
          <a href={clone_url} target='_blank' rel='noreferrer'>SEE REPO</a>
        </button>
      </div>
       
    </div>
  )
}

export default Repo


/*
    <article className='repo from-secondary to-accent bg-gradient-to-br' key={id}>
        <span className='title'>{nameFormat.length > 2 ? nameFormat.slice(0,2).join('-') : name.toUpperCase() }</span>
        <div className=" btn-pagination btn-outline"><a href={clone_url} target='_blank' rel='noreferrer'>See repo</a></div>
    </article>
*/
   