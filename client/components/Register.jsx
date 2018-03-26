import React from 'react'
import {Link} from 'react-router-dom'

class Register extends React.Component {
  render () {
    return (
      <div>
        <img src='/images/bg-stars.png' className='stars-background' />
        <div className='page-section'>
          <div className='page-heading-section'>
            <div className='page-title-font'>Register</div>
            <div className='page-title-blurb'>Register with Mārama to add courses and grants.</div>
          </div>

          <form className='submit-form' onSubmit={this.handleSubmit}>
            <div className='form-orgname'>
              Organisation Name: <br />
              <input name='orgname' onChange={this.handleChange} required />
            </div>

            <div className='form-email'>
              Email: <br />
              <input name='email' placeholder='Enter Email' required />
            </div>

            <div className='form-psw'>
              Password: <br />
              <input name='psw' placeholder='Enter Password' required />
            </div>

            <div className='form-psw-repeat'>
              Repeat Password: <br />
              <input name='psw-repeat' placeholder='Repeat Password' required />
            </div>

            <div className='submit-flex'>
              <button type="submit" value="Submit">Submit</button>
            </div>
          </form>
          <div>
            <Link to='/'>
              <button className='previous-button'>Home</button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Register
