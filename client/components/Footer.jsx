import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer-box'>
      <p className='footer-content'>Built by <Link to='/about'>Mārama</Link> &copy; 2018</p>
    </div>
  )
}

export default Footer
