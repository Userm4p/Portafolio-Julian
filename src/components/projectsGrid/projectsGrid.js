import React from 'react'
import '../../containers/projects/Project.scss'

export const GifGridItem = ({href,src,title}) => {
  return (
    <div >
      <a href={href} target="_blank noopener" >
          <img className='image animate__animated animate__backInDown animate__delay-0.5s' src={src} alt={title}/>
      </a>    
    </div>
  )
}