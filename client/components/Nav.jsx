import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div className='nav'>
      <Link to='/home'>Home</Link>
      <Link to='/contact'>Contact us</Link>
    </div>
  )
}

export default Nav
