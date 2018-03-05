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
        <div>
         <img src='/images/bg-stars.png' className='stars-background'/>
        <div className='page-section'>
        <div className='contact'>
        <div className='page-title-font'>Contact us</div>
        <div className='p-class'>Need to contact us? Reach out here.</div>
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
