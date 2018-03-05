import React from 'react'
import request from 'superagent'
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
        <div className='contact'>
          <h1>Contact us</h1>
          <p>Blurb about contacting us</p>
          <form className='submit-form' onSubmit={this.handleSubmit}>
            <div>
              <input name='name' onChange={this.handleChange} required/>
            </div>
            <div>
              <input type='email' name='email' onChange={this.handleChange} required/>
            </div>
            <div>
              <textarea name='message' onChange={this.handleChange} required/>
            </div>
            <div className='submit-flex'>
              <button type="submit" value="Submit">Submit</button>
            </div>
          </form>
        </div>
      )
    }
    if (this.state.submitted) {
      return (
        <p>Thanks for submitting</p>
      )
    }
  }
}

export default Contact
