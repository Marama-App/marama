import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div className='nav-header'>
      <div className='nav-logo'>
        <Link to='/'>
          <img src='/images/marama-logo.png' className='marama-logo'/>
        </Link>
      </div>
      <div className='nav-links'>
        {/* <span className='nav-link-individual-styling'>
          <Link to='/'>Home</Link>
        </span> */}
        <span className='nav-link-individual-styling'>
          <Link to='/about'>about us</Link>
        </span>
        <span className='nav-link-individual-styling'>
          <Link to='/contact'>contact</Link>
        </span>

      </div>
    </div>
  )
}

export default Nav
