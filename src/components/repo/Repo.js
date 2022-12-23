import React from 'react'
import './repo.scss'

const Repo = ({repo}) => {
  const {name, id, clone_url} = repo
  var nameFormat = name.toUpperCase().split('-')
  return (
   <div className="card w-96 bg-base-100 shadow-xl m-4" key={id}>
     <div className="card-body">
      <h2 className="card-title title">{nameFormat.length > 2 ? nameFormat.slice(0,2).join('-') : name.toUpperCase()}</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div className="card-actions justify-end">
        <button className="btn-pagination btn-outline"><a href={clone_url} target='_blank' rel='noreferrer'>SEE REPO</a></button>
      </div>
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
   