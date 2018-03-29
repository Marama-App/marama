import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { signIn } from '../actions/auth'
import { clearError } from '../actions/error'

class SignIn extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: ''
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
    const { username, password } = this.state
    return (
      <div className='signinpg'>
        <img src='/images/bg-stars.png' className='stars-background' />
        <div className='page-section'>
          <div className='page-heading-section'>
            <div className='page-title-font'>Sign In</div>
            <div className='page-title-blurb'>Sign in with Marama to add courses and grants.</div>
          </div>

          <form>
            <div className='form-username'>
              Username: <br />
              <input name='username' onChange={this.handleChange} value={username} required />
            </div>
            <br />
            <div className='form-password'>
              Password: <br />
              <input name='password' onChange={this.handleChange} value={password} required />
            </div>
            <br />
            <div className='submit-flex'>
              <button name='sign-in-button' className='button is-primary'
                onClick={this.handleSubmit}>Sign in</button>
            </div>
          </form>
          < div >
            <Link to='/'>
              <button className='previous-button'>Home</button>
            </Link>
          </div >
        </div>
      </div>
    )
  }

  handleChange (e) {
    const {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit (e) {
    const {username, password} = this.state
    const goToHome = () => this.props.history.push('/')
    this.props.signIn(username, password, goToHome)
    e.preventDefault()
  }
}

SignIn.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func
  }),
  signIn: PropTypes.func
}

function mapDispatchToProps (dispatch) {
  return {
    signIn: (username, password, onSuccess) => {
      dispatch(clearError())
      dispatch(signIn({username, password}, onSuccess))
    }
  }
}

export default connect(null, mapDispatchToProps)(SignIn)
