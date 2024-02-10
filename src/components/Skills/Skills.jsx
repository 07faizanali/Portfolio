import React, { useState } from 'react'
import './Skills.css'
import { SKILLS } from '../../utils/data'
import SkillCard from './SkillCard/SkillCard'
import SkillsInfoCard from './SkillsInfoCard/SkillsInfoCard'

const Skills = () => {

  const [selectedSkil, setSelectedSkil]= useState(SKILLS[0])

  const handleSelectedSkill =(data)=>{
    setSelectedSkil(data)
  }
  return (

    <section  className='skills-container'>
        <h5 id='skills'>Technical Proficiency</h5>
        <div className='skills-content'>
        <div className='skills'> 
        {SKILLS.map((item) =>(
            <SkillCard
            key={item.title}
            iconUrl={item.icon}
            title={item.title}
            isActive={selectedSkil.title === item.title}
            onClick={()=>{
              handleSelectedSkill(item)
            }}
            />

        ))}
        </div>

        <div className='skills-info'>
          <SkillsInfoCard
          heading={selectedSkil.title}
          skills={selectedSkil.skills}
          />
        </div>
    </div>
    </section>

  )
}

export default Skills