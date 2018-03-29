import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { register } from '../../actions/auth'
import { showError, clearError } from '../../actions/error'

class Orgs extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      companyName: '',
      username: '',
      password: '',
      confirm: '',
      match: false,
      showMatch: false
    }
    this.styles = {
      match: {
        color: 'orange'
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  render () {
    const { email, companyName, username, password, confirm, showMatch, match } = this.state

    return (
      <div>
        <img src='/images/bg-stars.png' className='stars-background' />
        <div className='page-section'>
          <div className='page-heading-section'>
            <div className='page-title-font'>Register</div>
            <div className='page-title-blurb'>Register with Mārama to add courses and grants.</div>
          </div>

          <form className='submit-form'>
            <div className='form-name'>
              Company name: <br />
              <div className='control has-icons-left'>
                <input name='companyName' onChange={this.handleChange} value={companyName} required />
                <span className='icon is-small is-left'>
                  <i className='fa fa-building' />
                </span>
              </div>
            </div>

            <div className='form-email'>
              Email: <br />
              <div className='control has-icons-left'>
                <input name='email' onChange={this.handleChange} value={email} required />
                <span className='icon is-small is-left'>
                  <i className='fa fa-envelope' />
                </span>
              </div>
            </div>

            <div className='form-username'>
              Username: <br />
              <div className='control has-icons-left'>
                <input name='username' onChange={this.handleChange} value={username} required/>
                <span className='icon is-small is-left'>
                  <i className='fa fa-user' />
                </span>
              </div>
            </div>

            <div className='form-password'>
              Password: <br />
              <div className='control has-icons-left'>
                <input name='password'
                  type='password'
                  onChange={this.handleChange} value={password} required />
                <span className='icon is-small is-left'>
                  <i className='fa fa-key' />
                </span>
              </div>
            </div>

            <div className='form-password'>
              Confirm password: <br />
              <div className='control has-icons-left'>
                <input name='confirm'
                  type='password'
                  onChange={this.handleChange} value={confirm} required />
                <span className='icon is-small is-left'>
                  <i className='fa fa-key' />
                </span>
                {showMatch && !match && <span style={this.styles.match}>*</span>}
              </div>
            </div>

            <div className='submit-flex'>
              <button className='button is-primary'
                onClick={this.handleSubmit}>Register</button>
            </div>
          </form>
        </div>
      </div>
    )
  }

  handleChange (e) {
    const { name, value } = e.target
    let match = this.state.match
    match = name === 'password' ? value === this.state.confirm : match
    match = name === 'confirm' ? value === this.state.password : match
    this.setState({
      [name]: value,
      showMatch: this.state.showMatch || name === 'confirm',
      match: match
    })
  }

  handleSubmit (e) {
    const { register } = this.props
    const { username, password, confirm } = this.state
    register(username, password, confirm)
    e.preventDefault()
  }
}

Orgs.propTypes = {
  register: PropTypes.func
}

function mapDispatchToProps (dispatch) {
  return {
    register: (username, password, confirm) => {
      if (password === confirm) {
        dispatch(clearError())
        return dispatch(register({ username, password }))
      }
      dispatch(showError('Password and confirmation don\'t match'))
    }
  }
}

export default connect(null, mapDispatchToProps)(Orgs)
