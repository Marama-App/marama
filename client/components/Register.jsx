import React from 'react'
import request from 'superagent'
import {Link} from 'react-router-dom'
import baseUrl from '../lib/base-url'

class Register extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      orgname: '',
      email: '',
      psw: '',
      pswrepeat: '',
      submitted: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit (evt) {
    evt.preventDefault()
    request
      .post(`${baseUrl}/api/v1/auth`)
      .send({
        name: this.state.orgname,
        email: this.state.email,
        psw: this.state.psw,
        pswrepeat: this.state.pswrepeat
      })
      .then(res => {
        this.setState({
          submitted: true
        })
      })
  }

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
              <input name='pswrepeat' placeholder='Repeat Password' required />
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
