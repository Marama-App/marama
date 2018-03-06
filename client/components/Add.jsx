import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {getTypes, sendAddForm} from '../actions/add'
import {getInterests} from '../actions/interests'

class Add extends React.Component {
  constructor () {
    super()
    this.state = {
      interestSelector: '',
      typeSelector: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
    this.handleTypeSelect = this.handleTypeSelect.bind(this)
  }
  componentDidMount () {
    this.props.dispatch(getInterests())
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
    for (let interest in this.props.add) {
      if (this.props.add[interest].interests === e.target.value) {
        this.setState({
          interestId: this.props.add[interest].id
        })
      }
    }
    const selection = {
      [e.target.name]: e.target.value
    }
    this.props.dispatch(getTypes(selection))
  }

  handleTypeSelect (e) {
    for (let type in this.props.addTypes) {
      if (this.props.addTypes[type].name === e.target.value) {
        this.setState({
          typeId: this.props.addTypes[type].id
        })
      }
    }
    const selection = {
      [e.target.name]: e.target.value
    }
    this.setState(selection)
  }

  render () {
    return (
      <div>
        <img src='/images/bg-stars.png' className='stars-background'/>
        <div className='page-section'>
          <div className='page-heading-section'>
            <div className='page-title-font'>Add new course</div>
            <div>
              <h4>Please select the area of interest the course applies to.</h4>
              <select name='interestSelector' onChange={this.handleSelect}>
                {this.props.interests.map(interest => (
                  <option key={interest.id}>{interest.interests}</option>
                )
                )}
              </select>
            </div>
            <div>
              <h4>Please select the topic of study.</h4>
              <select name='typeSelector' onChange={this.handleTypeSelect}>
                {this.props.addTypes.map(interestType => (
                  <option key={interestType.type_id}>{interestType.name}</option>
                )
                )}
              </select>
            </div>
            <div>
          Course Name:
              <br />
              <input name='course' placeholder='' onChange={this.handleChange} />
              <br />
          Provider: <br />
              <input name='provider' placeholder='' onChange={this.handleChange} />
              <br />
          Website: <br />
              <input name='link' placeholder='' onChange={this.handleChange} />
              <br />
          Course Location: <br />
              <input name='location' placeholder='' onChange={this.handleChange} />
              <br />
          Domestic Price: <br />
              <input name='domestic_price' placeholder='' onChange={this.handleChange} />
              <br />
          International Price: <br />
              <input name='international_price' placeholder='' onChange={this.handleChange} />
              <br />
          Course Duration: <br />
              <input name='duration' placeholder='' onChange={this.handleChange} />
              <br />
          Level: <br />
              <input name='level' placeholder='' onChange={this.handleChange} />
              <br />
              <button type='submit' onClick={this.handleClick}>Submit course details</button>
            </div>
            <br />
            <br />
          </div>
        </div>
        <div>
          <Link to='/'>
            <button>Finished</button>
          </Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    interests: state.interests,
    addTypes: state.addTypes
  }
}

export default connect(mapStateToProps)(Add)
