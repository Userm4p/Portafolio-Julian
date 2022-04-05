import React from 'react'
import '../../containers/projects/Project.scss'

export const GifGridItem = ({href,src,title,description}) => {
  return (
    <div className='projects-container' >
      <a href={href} target="_blank noopener" >
          <img className='image animate__animated animate__fadeInLeft animate__delay-0.5s' src={src} alt={title}/>
      </a> 
      <div className='projects-item'>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>   
    </div>
  )
}