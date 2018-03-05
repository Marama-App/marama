import React from 'react'

import {connect} from 'react-redux'

import {getAll, sendAddForm} from '../actions/update'

class Update extends React.Component {
  constructor () {
    super()
    this.state = {}
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }
  componentDidMount () {
    this.props.dispatch(getAll())
  }

  handleClick () {
    this.props.dispatch(sendAddForm(this.state))
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render () {
    return (
      <div className='update-section'>
        <h1>Update</h1>
        Course Name: <input name='course' placeholder='' onChange={this.handleChange} />
        <br />
        Provider: <input name='provider' placeholder='' onChange={this.handleChange} />
        <br />
        Website: <input name='link' placeholder='' onChange={this.handleChange} />
        <br />
        Course Location: <input name='location' placeholder='' onChange={this.handleChange} />
        <br />
        Domestic Price: <input name='domestic_price' placeholder='' onChange={this.handleChange} />
        <br />
        International Price: <input name='international_price' placeholder='' onChange={this.handleChange} />
        <br />
        Course Duration: <input name='duration' placeholder='' onChange={this.handleChange} />
        <br />
        Level: <input name='level' placeholder='' onChange={this.handleChange} />
        <br />
        <button type='submit' onClick={this.handleClick}>Press Me</button>
        <br />
        <br />
        <p>Something for the grants</p>  {/* dropdown? */}
        <p>Something for the employers</p>
        <p>Something for the help</p>
        <p>Something for the junction tables</p> {/* dropdown? */}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    update: state.update
  }
}

export default connect(mapStateToProps)(Update)
