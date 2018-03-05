import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div className='nav-header'>
      <div className='nav-logo'>
        <div className='marama-logo'>Mārama</div>
      </div>
      <div className='nav-links'>
      <Link to='/'>Home</Link>
      <Link to='/contact'>Contact us</Link>
      <Link to='/about'>About</Link>
      </div>
    </div>
  )
}

export default Nav
