import React from 'react'

const Header = ({fullName, posiName}) => {
  return (
    <div>
      <div className='header'>
          <input className='full-name' value={fullName} type='text' readOnly></input>
          <input className='position' value={posiName} type='text' readOnly ></input>
        </div>
    </div>
  )
}

export default Header
