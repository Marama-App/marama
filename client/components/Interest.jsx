import React from 'react'
import { Link } from 'react-router-dom'
import { getType } from '../actions/type.js'
import { connect } from 'react-redux'

class Interest extends React.Component {
<<<<<<< HEAD
  constructor (props) {
    super(props)
    this.state = {
      type: []
    }
  }

  componentDidMount () {
    this.getType()
  }

  getType () {
    request
      .get('/api/v1/interests/:id')
      .then((res) => {
        this.setState({
          type: res.body.type
        })
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err.message)
      })
=======
  componentDidMount () {
    this.props.dispatch(getType(this.props.match.params.interest))
>>>>>>> 0c3509f3c300df2523de47a8ba6af3efa54c9d02
  }

  render () {
    return (
      <div className='interest-section'>
<<<<<<< HEAD
        <h1>Gaming</h1>
        {this.state.type.map(type => (
          <div key={type.id}>
            <Link to={`/interests/${type.id}`}>
=======
        <h1>{this.props.match.params.interest}</h1>
        {this.props.interestType.map(type => (
          <div key={type.type_id}>
            <Link to={`/interests/${this.props.match.params.interest}/${type.name}`}>
>>>>>>> 0c3509f3c300df2523de47a8ba6af3efa54c9d02
              <p>{type.name}</p>
            </Link>
            <div>
              <p>{type.description}</p>
            </div>
          </div>
        )
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    interestType: state.interestType
  }
}

export default connect(mapStateToProps)(Interest)
