import React from 'react'

const Project = ({projectItem}) => {
    const { id, title, img, desc, category, technologies, url} = projectItem;
    return(
     <article key={id} className='menu-item'>
      <a href={url} target="_blank" rel='noreferrer'><img src={img} alt={title} className='photo'/></a>    
       <div className='item-info'>
         <header>
           <h4>{title}</h4>
           <h4 className='price'>{category}</h4> 
         </header>
         <p className='item-text'>{desc}</p>
         {technologies && technologies.map(tech => (
            <div key={id + tech} className="badge badge-secondary badge-outline m-1"><span className='text-gray-700 '>{tech}</span></div>
         ))}
       </div>
     </article>
  )
}

export default Project