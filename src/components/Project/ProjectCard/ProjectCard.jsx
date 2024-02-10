import React from 'react'
import './ProjectCard.css'

const ProjectCard = ({details}) => {
  return (
    <div className='work-project-card'>
    <h6>{details.title}</h6>

    <div className='work-duration'>{details.date}</div>
    <ul>
        {details.responsibility.map((item)=>(
            <li key={item}>{item}</li>
        ))}
    </ul>
</div> 
  )
}

export default ProjectCard