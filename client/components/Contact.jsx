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
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange (evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleClick (evt) {
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
          <form className='submit-form'>
            <div>
              <input name='name' onChange={this.handleChange} />
            </div>
            <div>
              <input name='email' onChange={this.handleChange}/>
            </div>
            <div>
              <textarea name='message' onChange={this.handleChange}/>
            </div>
          </form>
          <div className='submit-flex'>
            <button type="submit" value="Submit" onClick={this.handleClick}>Submit</button>
          </div>
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
