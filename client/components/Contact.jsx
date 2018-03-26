import React from 'react'
import request from 'superagent'
import {Link} from 'react-router-dom'
import baseUrl from '../lib/base-url'

class Contact extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: '',
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
      .post(`${baseUrl}/api/v1/contact`)
      .send({
        name: this.state.name,
        email: this.state.email,
        message: this.state.message
      })
      .then(res => {
        this.setState({
          submitted: true
        })
      })
  }

  render () {
    if (!this.state.submitted) {
      return (
        <div>
          <img src='/images/bg-stars.png' className='stars-background' />
          <div className='page-section'>
            <div className='page-heading-section'>
              <div className='page-title-font'>Contact us</div>
              <div className='page-title-blurb'>Need to get in touch with us? Reach out here.</div>
            </div>

            <form className='submit-form' onSubmit={this.handleSubmit}>
              <div className='name-email'>
                <div className='form-name'>
                  Full Name: <br />
                  <input name='name' onChange={this.handleChange} required />
                </div>
                <div className='form-email'>
                  Email: <br />
                  <input type='email' name='email' onChange={this.handleChange} required />
                </div>
              </div>
              <div className='form-message'>
                Your message to us: <br />
                <textarea name='message' onChange={this.handleChange} required />
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
    if (this.state.submitted) {
      return (
        <div className='p-class'>Thanks for submitting!</div>
      )
    }
  }
}

export default Contact
