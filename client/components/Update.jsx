import React from 'react'

import {connect} from 'react-redux'

import {getAll, getTypes, sendAddForm} from '../actions/update'
// import {getType} from '../actions/type'

class Update extends React.Component {
  constructor () {
    super()
    this.state = {
      interestSelector: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
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

  handleSelect (e) {
    const selection = {
      [e.target.name]: e.target.value
    }

    this.props.dispatch(getTypes(selection))
  }

  render () {
    return (
      <div className='update-section'>
        <h1>Update</h1>
        <select name='interestSelector' onChange={this.handleSelect}>
          {this.props.update.map(interest => (
            <option key={interest.id}>{interest.interests}</option>
          )
          )}
        </select>
        <select>
          {this.props.updateTypes.map(interestType => (
            <option key={interestType.type_id}>{interestType.name}</option>
          )
          )}
        </select>
        <br />
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
    update: state.update,
    updateTypes: state.updateTypes
  }
}

export default connect(mapStateToProps)(Update)
