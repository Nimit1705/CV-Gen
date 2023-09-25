import React from 'react'

const Education = ({
    institute,
    education,
    grade,
    session,
}) => {
  return (
    <div className='education-container'>
        <div className='education'>
            <h3>EDUCATION</h3>
            <ul className='education-ul'>
                <li>
                    <h3 className='education-course'>{education}</h3>
                    <p className='institute'>{institute}</p>
                    <div className='grade-session'>
                        <p className='grade'>{grade}</p>
                        <p className='session'>{session}</p>
                    </div>
                </li>
                <li>
                    <h3 className='education-course'>{education}</h3>
                    <p className='institute'>{institute}</p>
                    <div className='grade-session'>
                        <p className='grade'>{grade}</p>
                        <p className='session'>{session}</p>
                    </div>
                </li>
                <li>
                    <h3 className='education-course'>{education}</h3>
                    <p className='institute'>{institute}</p>
                    <div className='grade-session'>
                        <p className='grade'>{grade}</p>
                        <p className='session'>{session}</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Education
