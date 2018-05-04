import React from 'react'
// import request from 'superagent'
import { Link } from 'react-router-dom'

import OrgsRegistration from './registration/Orgs'

const Register = () => {
  return (
    <div>
      <OrgsRegistration />
      < div >
        <Link to='/'>
          <button className='previous-button'>Home</button>
        </Link>
      </div >
    </div>
  )
}

export default Register
