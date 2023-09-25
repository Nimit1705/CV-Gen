import React from 'react'

const Skills = ({skills}) => {
  return (
    <div className='skill-container'>
      <div className='skills'>
        <h3>TECHNICAL SKILLS</h3>
        <ul>
        {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Skills
