import React from 'react'
// import request from 'superagent'
import { Link } from 'react-router-dom'

import Orgs from './registration/Orgs'

const Register = () => {
  return (
    <div>
      <Orgs />
      < div >
        <Link to='/'>
          <button className='previous-button'>Home</button>
        </Link>
      </div >
    </div>
  )
}

export default Register
